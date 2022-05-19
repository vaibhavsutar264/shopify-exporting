<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
   use HasFactory;
   protected $fillable = [
      'subject',
      'uuid',
      'from_name',
      'from_email',
      'from_mobile_number',
      'receipent_name',
      'receipent_email',
      'receipent_mobile_number',
      'receipent_mobile_number',
      'attachment_type',
      'attachment_url',
      'message',
      'status',
      'sent_at',
      'read_at',
   ];
   function getMessageAttribute($value) {
      if (!$value) {
         return config('options.message.template');
      }
      return $value;
   }
}
