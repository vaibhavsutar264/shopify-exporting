<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Menu extends Model
{

   /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
      'title',
      'name',
      'uri',
      'uri_type',
      'css_class',
      'description',
      'group',
      'parent_id',
      'order_index',
      'is_autoload',
      'props',
   ];
   protected $casts = [
      // 'props' => 'array',
      'order_index' => 'number',
      'is_autoload' => 'boolean',
   ];

   protected static function booted()
   {
      static::created(function ($model) {
         if (request()->user()) {
            $model->created_by_user_id = request()->user()->id;
         }
         if (!$model->code) {
            $model->code = Str::slug(strtolower($model->title));
         }
         $model->save();

      });
   }
   public $timestamps = false;
   function children() {
      return $this->hasMany(self::class);
   }
}
