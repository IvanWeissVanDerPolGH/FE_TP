# FE_TP
 
# Setting up Angular Project for Patient Tracking System

## Prerequisites
1. Install Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. Install Angular CLI: Angular CLI is a powerful tool for developing Angular applications. You can install it globally using the following command:

* npm install -g @angular/cli


# Create a New Angular Project
1. Open your terminal or command prompt.

2. Navigate to the directory where you want to create your project.

3. Run the following command to create a new Angular project:
* ng new patient-tracking-system



## Project Structure
Your project structure should now look like this:

patient-tracking-system/

├── src/ 
│ ├── app/
│ │ ├── components/
│ │ ├── services/
│ │ └── ...
│ ├── assets/
│ └── ...
├── ...

# Create Components
1. Create components for each module you mentioned in the system description. For example, for "Administración de categorias," you can create a component named `categories`.

To create a new component, run:
- ng generate component folder/name

# Repeat this step for each module.

## Implement Routing
1. Open `src/app/app-routing.module.ts` and configure your routes. Here's an example of how to set up routes for the components you've created:
```typescript
const routes: Routes = [
  { path: 'name', component: nameComponent },
];
```
Make sure to import the components at the top of your app-routing.module.ts file.

## Create Services
1. Create services for handling data and business logic. For example, create a service for managing categories, patients, reservations, etc.

To create a service, run:
* ng generate service folder/name

import service in the component 
import { serviceName  } from './services/servicename.service';

##  create mock data 
1. Create JSON Files:
In each of the component-specific data subfolders (e.g., Consulta), create JSON files to store your data. These JSON files will act as mock data for your application.

2. Read JSON Data in Services:
To access and use this data in your Angular services, you can use the HttpClient module to read the JSON files asynchronously. Here's an example of how to do this in a service:
### service example
```
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaComponent } from 'src/app/components/consulta/consulta.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class serviceName {
  private ConsultaUrl = 'assets/data/Consulta/Consulta.json';

  constructor(private http: HttpClient) {}

  getConsulta(): Observable<ConsultaComponent[]> {
    return this.http.get<ConsultaComponent[]>(this.ConsultaUrl);
  }
}
```

### make a data interface 
create a file  componentName.interface.ts with data definitions

```
export interface Consulta {
  id: number;
  description: string;
}
```

### inject service in component

add this to the component export
```implements OnInit{

  array_var_name: interface[];

  constructor(private serviceName: serviceName) {}

  ngOnInit(): void {
    this.serviceName.getdata_sample().subscribe((componentName) => {
      this.componentName = array_var_name;
    });```



