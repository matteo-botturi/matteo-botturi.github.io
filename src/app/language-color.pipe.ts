import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageColor',
  standalone: true
})
export class LanguageColorPipe implements PipeTransform {
  transform(language: string): string {
    let color: string;

    switch (language) {
      case 'HTML':
        color = 'orange lighten-1'; 
        break;
      case 'CSS':
        color = 'blue lighten-1'; 
        break;
      case 'Javascript':
        color = 'yellow darken-2'; 
        break;
      case 'PHP':
        color = 'blue-grey darken-2'; 
        break;
      case 'Java':
        color = 'orange darken-2'; 
        break;
      case 'JavaFX':
        color = 'purple lighten-1'; 
        break;
      case 'Angular':
        color = 'red accent-2'; 
        break;
      case 'SQL':
        color = 'teal darken-1'; 
        break;
      case 'Spring':
        color = 'green lighten-1'; 
        break;
      case 'Quarkus':
        color = 'red accent-2'; 
        break;
      default:
        color = 'grey lighten-3'; 
        break;
    }

    return 'chip ' + color;
  }
}
