<?php

namespace App\Notifications;

use App\Models\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendGreetMessageNotification extends Notification
{
   use Queueable;
   public Message $msg;
   /**
    * Create a new notification instance.
    *
    * @return void
    */
   public function __construct(Message $msg)
   {
      $this->msg = $msg;
   }

   /**
    * Get the notification's delivery channels.
    *
    * @param  mixed  $notifiable
    * @return array
    */
   public function via($notifiable)
   {
      return [
         'mail',
      ];
   }

   /**
    * Get the mail representation of the notification.
    *
    * @param  mixed  $notifiable
    * @return \Illuminate\Notifications\Messages\MailMessage
    */
   public function toMail($notifiable)
   {
      $msg = $this->msg;
      $subject = "Gift order with message from $msg->from_name";
      return (new MailMessage)->subject($subject)->markdown('emails.greet_msg', [
         'msg' => $msg,
      ]);
   }

   /**
    * Get the array representation of the notification.
    *
    * @param  mixed  $notifiable
    * @return array
    */
   public function toArray($notifiable)
   {
      return [
         //
      ];
   }
}
