<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
   /**
    * Determine if the user is authorized to make this request.
    *
    * @return bool
    */
   public function authorize()
   {
      return true;
   }

   /**
    * Get the validation rules that apply to the request.
    *
    * @return array
    */
   public function rules()
   {
      return [
         'mobile_no' => [ 'required', 'digits:10', ],
         'password' => [ 'nullable', 'string', 'min:4' ],
      ];
   }
   /**
    * Configure the validator instance.
    *
    * @param  \Illuminate\Validation\Validator  $validator
    * @return void
    */
   public function withValidator($validator)
   {
      $validator->after(function ($validator) {

      });
   }
}
