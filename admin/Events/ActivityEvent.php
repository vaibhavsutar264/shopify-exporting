<?php

namespace Admin\Events;

use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ActivityEvent
{
   use Dispatchable, InteractsWithSockets, SerializesModels;
   public $action;
   public $user;
   public $payload;
   /**
    * Create a new event instance.
    *
    * @return void
    */
   public function __construct(User $user, string $action, array $payload = [])
   {
      $this->action = $action;
      $this->user = $user;
      $this->payload = $payload;
   }

   /**
    * Get the channels the event should broadcast on.
    *
    * @return \Illuminate\Broadcasting\Channel|array
    */
   public function broadcastOn()
   {
      return new PrivateChannel('channel-name');
   }
}
