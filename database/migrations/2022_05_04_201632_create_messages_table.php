<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
   /**
    * Run the migrations.
    *
    * @return void
    */
   public function up()
   {
      Schema::create('messages', function (Blueprint $table) {
         $table->id();
         $table->uuid('uuid')->index();
         $table->string('order_id')->nullable();
         $table->string('order_channel')->default('shopify');
         $table->string('order_domain')->nullable();
         $table->string('subject')->nullable();
         $table->string('from_name')->nullable();
         $table->string('from_email')->nullable();
         $table->string('from_mobile_number')->nullable();
         $table->string('receipent_name')->nullable();
         $table->string('receipent_email')->nullable();
         $table->string('receipent_mobile_number')->nullable();
         $table->string('attachment_type')->nullable();
         $table->text('attachment_url')->nullable();
         $table->string('status')->default('pending');
         $table->longText('message')->nullable();
         $table->timestampTz('sent_at')->nullable();
         $table->timestampTz('read_at')->nullable();
         $table->timestampsTz();
      });
   }

   /**
    * Reverse the migrations.
    *
    * @return void
    */
   public function down()
   {
      Schema::dropIfExists('messages');
   }
}
