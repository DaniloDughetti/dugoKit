import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeContent'
})
export class SafeContentPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }

}
