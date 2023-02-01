import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonExporterService {

  export() {
    const data = JSON.stringify({ wether: { is_sunny: true, temp: '+25' } });
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(data);
    const exportFileName = 'weather.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  }
}
