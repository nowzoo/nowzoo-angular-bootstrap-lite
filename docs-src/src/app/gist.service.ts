import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class GistService implements Resolve<any>  {
  gistUrl = 'https://api.github.com/gists/';
  cache: any = {};
  constructor(
      private http: HttpClient
  ) { }

  getGist(id: string): Promise<any> {
    const p = new Promise((resolve) => {
      if (this.cache[id]){
        return resolve(Object.assign({}, this.cache[id]));
      }
      const url = this.gistUrl + id;
      this.http.get(url).subscribe((data:any) => {
        const gistFiles:any = {};
        // Read the result field from the JSON response.
        // console.log(data.files);
        Object.keys(data.files).forEach((filename: string) => {
          const file:any = data.files[filename];
          gistFiles[filename] = file.content;
        })
        this.cache[id] = gistFiles;
        return resolve(Object.assign({}, this.cache[id]));
      });
    });
    return p;
  }
  resolve(route: ActivatedRouteSnapshot) {
    return this.getGist(route.data['gistId']);
  }

}
