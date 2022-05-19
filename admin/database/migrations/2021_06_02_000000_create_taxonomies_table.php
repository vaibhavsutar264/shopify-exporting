<?php

use Admin\Models\Tag;
use Admin\Models\Taxonomy;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   /**
    * Run the migrations.
    *
    * @return void
    */
   public function up()
   {
      Schema::create('taxonomies', function (Blueprint $table) {
         $table->id();
         $table->string('title');
         $table->string('code');
         $table->string('type')->default('categories');
         $table->string('excerpt')->nullable();
         $table->longText('description')->nullable();
         $table->foreignId('parent_id')->nullable()->references('id')->on($table->getTable())->cascadeOnDelete();
         $table->timestampsTz();
         $table->softDeletesTz();
      });
      Schema::create('taxonomables', function (Blueprint $table) {
         $table->id();
         $table->foreignIdFor(Taxonomy::class);
         $table->morphs('taxonomable');
      });
      // tags
      Schema::create('tags', function (Blueprint $table) {
         $table->id();
         $table->string('name')->nullable();
         $table->foreignIdFor(User::class, 'user_id');
         $table->timestampsTz();
      });
      Schema::create('taggables', function (Blueprint $table) {
         $table->id();
         $table->foreignIdFor(Tag::class);
         $table->morphs('taggable');
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
      Schema::dropIfExists('taxonomables');
      Schema::dropIfExists('taxonomies');
      Schema::dropIfExists('taggables');
      Schema::dropIfExists('tags');
   }
};
