/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NgModule, Type } from '@angular/core';

import { StMinValidator } from  './st-min-validator/st-min-validator';
import { StMaxValidator } from  './st-max-validator/st-max-validator';


export const SHARED_FORM_DIRECTIVES: Type<any>[] = [
   StMinValidator,
   StMaxValidator
];


@NgModule({
   declarations: SHARED_FORM_DIRECTIVES,
   exports: SHARED_FORM_DIRECTIVES
})

export class StFormDirectiveModule {
}
