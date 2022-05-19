<?php

namespace Admin\Http\Controllers;

use Admin\Http\Requests\MessageRequest;
use App\Http\Controllers\Controller;
use Admin\Models\Role;
use App\Events\MessageEvent;
use App\Models\Message;
use Illuminate\Http\Request;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use SimpleSoftwareIO\QrCode\Facades\QrCode;



class MessageController extends Controller
{
   function index(MessageRequest $req) {
      $messages = Message::latest();
      $messages = $messages->paginate(config('admin.pagination_limit'));
      $title = 'Messages';
      return inertia('messages/index', compact(
         'messages', 'title'
      ));
   }
   function create() {
      $user = new User;
      $roles = Role::select(['id as value', 'title as label'])->get()->toArray();
      return inertia('users/create', compact(
         'user', 'roles'
      ));
   }

   function store(MessageRequest $req) {
      try {
         $user = User::create($req->validated());
         return response()->success([
            'message' => __('User created'),
            'data' => $user
         ]);
      }catch (\Throwable $th) {
         return response()->error([
            'message' => $th->getMessage()
         ]);
      }
   }
   function show(MessageRequest $req, Message $message) {
      return inertia('messages/show', compact(
         'message',
      ));
   }
   function edit(MessageRequest $req, Message $message) {
      // $roles = Role::select(['id as value', 'title as label'])->get()->toArray();
      return inertia('messages/create', compact(
         'message',
      ));
   }
   function makePdf(Request $req, $id) {
      $message = Message::findOrFail($id);
      // $roles = Role::select(['id as value', 'title as label'])->get()->toArray();
      // dd($message);
      // $qrCode = QrCode::format('png')->generate('Embed me into an e-mail!');
      // $qrCode = QrCode::size(100)->generate(url($message->attachment_url), public_path('img/qrcode.svg'));
      $data = [
         'message' => $message,
         // 'qrCode' => $qrCode,
      ];
      // return QrCode::format('svg')->size(100)->generate('sdfdsfds');
      // echo $qrCode;
      $pdf = Pdf::loadView('pdf.message', $data);
      return $pdf->download('gift-message.pdf');
   }
   function sendMail(Request $req, Message $message) {
      // $roles = Role::select(['id as value', 'title as label'])->get()->toArray();
      try {
         event(new MessageEvent($message));
         return redirect()->back()->withSuccess(
            'Mail sent.'
         );
      } catch (\Throwable $th) {
         // throw $th;
         return redirect()->back()->withErrors([
            'message' => $th->getMessage()
         ]);
      }
   }
   function update(MessageRequest $req, User $user) {
      try {
         $user->update($req->validated());
         if ($req->password) {
            $user->update([
               'password' => bcrypt($req->input('password')),
            ]);
         }

         return response()->success([
            'message' => __('User saved'),
            'data' => $user
         ]);
      }catch (\Throwable $th) {
         return response()->error([
            'message' => $th->getMessage()
         ]);
      }
   }
   function deleteMany(Request $req) {
      try {
         Message::query()->whereIn('id', $req->ids)->delete();
         return redirect()->back()->withSuccess(
            __('Messages removed')
         );
         return response()->json([
            'message' => __('Messages saved'),
            'ok' => true,
         ]);
      }catch (\Throwable $th) {
         return response()->json([
            'message' => $th->getMessage()
         ]);
      }
   }
}
