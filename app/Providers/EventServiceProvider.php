<?php

namespace App\Providers;

use Admin\Events\ActivityEvent;
use Admin\Listeners\ActivityEventListener;
use App\Events\MessageEvent;
use App\Listeners\MessageEventListener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
   /**
    * The event listener mappings for the application.
    *
    * @var array
    */
   protected $listen = [
      Registered::class => [
         SendEmailVerificationNotification::class,
      ],
      ActivityEvent::class => [
         ActivityEventListener::class
      ],
      MessageEvent::class => [
         MessageEventListener::class,
      ],
   ];

   /**
    * Register any events for your application.
    *
    * @return void
    */
   public function boot()
   {
      //
   }
}
