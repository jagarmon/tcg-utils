import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Set, SetDTO } from '../models/set.model';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SetService {
  private http = inject(HttpClient);
  private baseUrl = 'sets';
  getAll() {
    return firstValueFrom(
      this.http.get<SetDTO[]>(`${environment.apiUrl}/${this.baseUrl}`)
    );
  }
  create(set: Set) {
    return firstValueFrom(
      this.http.post<SetDTO>(`${environment.apiUrl}/${this.baseUrl}`, set)
    );
  }
  edit(id: number, set: Partial<Set>) {
    return firstValueFrom(
      this.http.put<SetDTO>(`${environment.apiUrl}/${this.baseUrl}/${id}`, set)
    );
  }
  delete(id: number) {
    return firstValueFrom(
      this.http.delete<SetDTO>(`${environment.apiUrl}/${this.baseUrl}/${id}`)
    );
  }
}
