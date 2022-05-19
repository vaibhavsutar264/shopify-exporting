<?php

namespace App\Listeners;

use App\Events\MessageEvent;
use App\Notifications\SendGreetMessageNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class MessageEventListener
{
   /**
    * Create the event listener.
    *
    * @return void
    */
   public function __construct()
   {
      //
   }

   /**
    * Handle the event.
    *
    * @param  \App\Events\MessageEvent  $event
    * @return void
    */
   public function handle(MessageEvent $event)
   {
      $msg = $event->msg;
      // dd($msg);
      try {
         Notification::route('mail', $msg->receipent_email)->notify(
            new SendGreetMessageNotification($msg)
         );
         $msg->update([
            'sent_at' => now(),
         ]);
         // Notification::send($msg, new SendGreetMessageNotification($msg));
      } catch (\Throwable $th) {
         Log::error($th);
         throw $th;
      }
   }
}
