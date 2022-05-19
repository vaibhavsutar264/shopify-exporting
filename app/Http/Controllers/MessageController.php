<?php

namespace App\Http\Controllers;

use App\Events\MessageEvent;
use App\Http\Requests\SendMessageRequest;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MessageController extends Controller
{
   public function sendMessage(SendMessageRequest $request)
   {
      $inputs = $request->validated();
      $media = $request->file('attachment');
      try {
         $storedFile = $media->store("public/messages");
         $storedFile = Storage::url($storedFile);
         $msg = Message::create($inputs);
         $msg->update([
            'attachment_url' => $storedFile
         ]);
         event(new MessageEvent($msg));
         return redirect()->route('greet.send')->withSuccess(
            'Your message is qued for sending...'
         );
      } catch (\Throwable $th) {
         // throw $th;
         return redirect()->back()->withErrors([
            'response' => $th->getMessage(),
         ]);
         return redirect()->back()->withException($th);
      }
   }

   function msgSent() {
      return view('pages.greet-sent');
   }

   function show(Request $request, $id) {
      $msg = Message::where('uuid', $id)->firstOrFail();
      // return $msg;
      $msg->update([
         'read_at' => now()
      ]);
      return view('pages.greet-show', [
         'msg' => $msg,
      ]);
   }

   function incomingReq(Request $request) {
      try {
         return view('pages.greet', [
            'values' => $request,
         ]);
      } catch (\Throwable $th) {
         //throw $th;
      }
   }
}
