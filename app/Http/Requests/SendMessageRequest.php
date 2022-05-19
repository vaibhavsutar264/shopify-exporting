<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;


class SendMessageRequest extends FormRequest
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
         'subject' => [
            'nullable',
            'string',
            'max:200',
         ],
         'order_id' => [
            'required',
         ],
         'from_name' => [
            'required',
            'string',
            'max:200',
         ],
         'from_email' => [
            'nullable',
            // 'max:200',
            'email:rfc,dns',
         ],
         'from_mobile_number' => [
            'nullable',
            'digits:10',
         ],
         'receipent_name' => [
            'required',
            'string',
            'max:200',
         ],
         'receipent_email' => [
            'required',
            // 'max:200',
            'email:rfc,dns',
         ],
         'receipent_mobile_number' => [
            'required',
            'digits:10',
         ],
         'attachment_type' => [
            'nullable',
            'file',
            'max:2000',
         ],
         'attachment_url' => [
            'nullable',
            'string',
            'max:200',
         ],
         'message' => [
            'nullable',
            'string',
            'max:200',
         ],
         'uuid' => [
            'required',
         ],
         'attachment' => [
            'required',
            'file',
            'max:1000',
         ],
      ];
   }

   function prepareForValidation()
   {
      $uuid = Str::uuid();
      $this->merge([
         'subject' => __("Greeting from admin"),
         'message' => 'Message from admin',
         'uuid' => $uuid,
      ]);
   }
}
