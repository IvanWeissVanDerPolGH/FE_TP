import { Data_consulta as Categorias } from "../consulta/data_consulta";
import { ReservaDeTurno } from "src/app/components/reserva-de-turnos/reserva-de-turnos.interface";
import { Data_RegistroDePersonas as Personas } from "../RegistroDePersonas/RegistroDePersonas";

const categorias = Categorias;
export const data_DatosDeReservas: ReservaDeTurno[] =
    [
{
  "id": 1,
  "doctor": Personas[2],
  "paciente": Personas[13],
  "fecha": new Date('2023/08/01'),
  "hora": "08:00 - 08:30",
  "categoria": categorias[0]
},
{
  "id": 2,
  "doctor": Personas[8],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/11'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[1]
},
{
  "id": 3,
  "doctor": Personas[5],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/29'),
  "hora": "15:00 - 15:30",
  "categoria": categorias[2]
},
{
  "id": 4,
  "doctor": Personas[0],
  "paciente": Personas[10],
  "fecha": new Date('2023/09/12'),
  "hora": "18:30 - 19:00",
  "categoria": categorias[3]
},
{
  "id": 5,
  "doctor": Personas[9],
  "paciente": Personas[16],
  "fecha": new Date('2023/10/15'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[4]
},
{
  "id": 6,
  "doctor": Personas[7],
  "paciente": Personas[18],
  "fecha": new Date('2023/10/30'),
  "hora": "12:00 - 12:30",
  "categoria": categorias[5]
},
{
  "id": 7,
  "doctor": Personas[3],
  "paciente": Personas[11],
  "fecha": new Date('2023/09/09'),
  "hora": "20:00 - 20:30",
  "categoria": categorias[6]
},
{
  "id": 8,
  "doctor": Personas[4],
  "paciente": Personas[12],
  "fecha": new Date('2023/09/26'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[7]
},
{
  "id": 9,
  "doctor": Personas[1],
  "paciente": Personas[15],
  "fecha": new Date('2023/10/05'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[8]
},
{
  "id": 10,
  "doctor": Personas[6],
  "paciente": Personas[14],
  "fecha": new Date('2023/09/17'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[9]
},
{
  "id": 11,
  "doctor": Personas[2],
  "paciente": Personas[16],
  "fecha": new Date('2023/10/09'),
  "hora": "14:00 - 14:30",
  "categoria": categorias[0]
},
{
  "id": 12,
  "doctor": Personas[3],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/06'),
  "hora": "19:30 - 20:00",
  "categoria": categorias[1]
},
{
  "id": 13,
  "doctor": Personas[9],
  "paciente": Personas[23],
  "fecha": new Date('2023/10/25'),
  "hora": "13:30 - 14:00",
  "categoria": categorias[2]
},
{
  "id": 14,
  "doctor": Personas[1],
  "paciente": Personas[20],
  "fecha": new Date('2023/09/10'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[3]
},
{
  "id": 15,
  "doctor": Personas[5],
  "paciente": Personas[22],
  "fecha": new Date('2023/09/30'),
  "hora": "18:30 - 19:00",
  "categoria": categorias[4]
},
{
  "id": 16,
  "doctor": Personas[2],
  "paciente": Personas[11],
  "fecha": new Date('2023/08/02'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[5]
},
{
  "id": 17,
  "doctor": Personas[1],
  "paciente": Personas[17],
  "fecha": new Date('2023/09/18'),
  "hora": "15:30 - 16:00",
  "categoria": categorias[6]
},
{
  "id": 18,
  "doctor": Personas[8],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/22'),
  "hora": "11:00 - 11:30",
  "categoria": categorias[7]
},
{
  "id": 19,
  "doctor": Personas[2],
  "paciente": Personas[15],
  "fecha": new Date('2023/09/27'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[8]
},
{
  "id": 20,
  "doctor": Personas[8],
  "paciente": Personas[20],
  "fecha": new Date('2023/08/03'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[9]
},
{
  "id": 21,
  "doctor": Personas[2],
  "paciente": Personas[23],
  "fecha": new Date('2023/08/15'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[0]
},
{
  "id": 22,
  "doctor": Personas[1],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/03'),
  "hora": "09:30 - 10:00",
  "categoria": categorias[1]
},
{
  "id": 23,
  "doctor": Personas[6],
  "paciente": Personas[20],
  "fecha": new Date('2023/08/27'),
  "hora": "12:00 - 12:30",
  "categoria": categorias[2]
},
{
  "id": 24,
  "doctor": Personas[6],
  "paciente": Personas[22],
  "fecha": new Date('2023/10/02'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[3]
},
{
  "id": 25,
  "doctor": Personas[7],
  "paciente": Personas[13],
  "fecha": new Date('2023/09/14'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[4]
},
{
  "id": 26,
  "doctor": Personas[8],
  "paciente": Personas[16],
  "fecha": new Date('2023/10/29'),
  "hora": "17:00 - 17:30",
  "categoria": categorias[5]
},
{
  "id": 27,
  "doctor": Personas[9],
  "paciente": Personas[21],
  "fecha": new Date('2023/09/07'),
  "hora": "17:30 - 18:00",
  "categoria": categorias[6]
},
{
  "id": 28,
  "doctor": Personas[2],
  "paciente": Personas[22],
  "fecha": new Date('2023/09/27'),
  "hora": "14:00 - 14:30",
  "categoria": categorias[7]
},
{
  "id": 29,
  "doctor": Personas[5],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/14'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[8]
},
{
  "id": 30,
  "doctor": Personas[2],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/25'),
  "hora": "12:00 - 12:30",
  "categoria": categorias[9]
},
{
  "id": 31,
  "doctor": Personas[3],
  "paciente": Personas[11],
  "fecha": new Date('2023/08/05'),
  "hora": "20:30 - 21:00",
  "categoria": categorias[0]
},
{
  "id": 32,
  "doctor": Personas[4],
  "paciente": Personas[12],
  "fecha": new Date('2023/08/30'),
  "hora": "09:30 - 10:00",
  "categoria": categorias[1]
},
{
  "id": 33,
  "doctor": Personas[1],
  "paciente": Personas[15],
  "fecha": new Date('2023/10/16'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[2]
},
{
  "id": 34,
  "doctor": Personas[8],
  "paciente": Personas[16],
  "fecha": new Date('2023/10/09'),
  "hora": "08:00 - 08:30",
  "categoria": categorias[3]
},
{
  "id": 35,
  "doctor": Personas[4],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/19'),
  "hora": "20:00 - 20:30",
  "categoria": categorias[4]
},
{
  "id": 36,
  "doctor": Personas[3],
  "paciente": Personas[18],
  "fecha": new Date('2023/08/11'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[5]
},
{
  "id": 37,
  "doctor": Personas[7],
  "paciente": Personas[13],
  "fecha": new Date('2023/10/04'),
  "hora": "16:00 - 16:30",
  "categoria": categorias[6]
},
{
  "id": 38,
  "doctor": Personas[1],
  "paciente": Personas[15],
  "fecha": new Date('2023/09/20'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[7]
},
{
  "id": 39,
  "doctor": Personas[7],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/23'),
  "hora": "11:00 - 11:30",
  "categoria": categorias[8]
},
{
  "id": 40,
  "doctor": Personas[3],
  "paciente": Personas[20],
  "fecha": new Date('2023/10/19'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[9]
},
{
  "id": 41,
  "doctor": Personas[6],
  "paciente": Personas[18],
  "fecha": new Date('2023/10/30'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[0]
},
{
  "id": 42,
  "doctor": Personas[5],
  "paciente": Personas[17],
  "fecha": new Date('2023/09/22'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[1]
},
{
  "id": 43,
  "doctor": Personas[0],
  "paciente": Personas[19],
  "fecha": new Date('2023/10/27'),
  "hora": "12:30 - 13:00",
  "categoria": categorias[2]
},
{
  "id": 44,
  "doctor": Personas[0],
  "paciente": Personas[23],
  "fecha": new Date('2023/09/18'),
  "hora": "08:00 - 08:30",
  "categoria": categorias[3]
},
{
  "id": 45,
  "doctor": Personas[9],
  "paciente": Personas[13],
  "fecha": new Date('2023/09/19'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[4]
},
{
  "id": 46,
  "doctor": Personas[2],
  "paciente": Personas[12],
  "fecha": new Date('2023/09/08'),
  "hora": "19:30 - 20:00",
  "categoria": categorias[5]
},
{
  "id": 47,
  "doctor": Personas[3],
  "paciente": Personas[14],
  "fecha": new Date('2023/08/11'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[6]
},
{
  "id": 48,
  "doctor": Personas[2],
  "paciente": Personas[20],
  "fecha": new Date('2023/10/04'),
  "hora": "16:00 - 16:30",
  "categoria": categorias[7]
},
{
  "id": 49,
  "doctor": Personas[5],
  "paciente": Personas[16],
  "fecha": new Date('2023/09/20'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[8]
},
{
  "id": 50,
  "doctor": Personas[0],
  "paciente": Personas[14],
  "fecha": new Date('2023/08/16'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[9]
},
{
  "id": 51,
  "doctor": Personas[8],
  "paciente": Personas[13],
  "fecha": new Date('2023/09/17'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[0]
},
{
  "id": 52,
  "doctor": Personas[4],
  "paciente": Personas[18],
  "fecha": new Date('2023/08/13'),
  "hora": "18:30 - 19:00",
  "categoria": categorias[1]
},
{
  "id": 53,
  "doctor": Personas[2],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/12'),
  "hora": "14:00 - 14:30",
  "categoria": categorias[2]
},
{
  "id": 54,
  "doctor": Personas[8],
  "paciente": Personas[11],
  "fecha": new Date('2023/09/26'),
  "hora": "13:30 - 14:00",
  "categoria": categorias[3]
},
{
  "id": 55,
  "doctor": Personas[4],
  "paciente": Personas[12],
  "fecha": new Date('2023/10/25'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[4]
},
{
  "id": 56,
  "doctor": Personas[1],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/06'),
  "hora": "20:30 - 21:00",
  "categoria": categorias[5]
},
{
  "id": 57,
  "doctor": Personas[9],
  "paciente": Personas[15],
  "fecha": new Date('2023/09/02'),
  "hora": "08:00 - 08:30",
  "categoria": categorias[6]
},
{
  "id": 58,
  "doctor": Personas[9],
  "paciente": Personas[18],
  "fecha": new Date('2023/08/31'),
  "hora": "15:30 - 16:00",
  "categoria": categorias[7]
},
{
  "id": 59,
  "doctor": Personas[2],
  "paciente": Personas[20],
  "fecha": new Date('2023/10/12'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[8]
},
{
  "id": 60,
  "doctor": Personas[7],
  "paciente": Personas[15],
  "fecha": new Date('2023/09/15'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[9]
},
{
  "id": 61,
  "doctor": Personas[6],
  "paciente": Personas[14],
  "fecha": new Date('2023/08/17'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[0]
},
{
  "id": 62,
  "doctor": Personas[2],
  "paciente": Personas[13],
  "fecha": new Date('2023/08/08'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[1]
},
{
  "id": 63,
  "doctor": Personas[7],
  "paciente": Personas[21],
  "fecha": new Date('2023/10/23'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[2]
},
{
  "id": 64,
  "doctor": Personas[5],
  "paciente": Personas[18],
  "fecha": new Date('2023/08/24'),
  "hora": "12:00 - 12:30",
  "categoria": categorias[3]
},
{
  "id": 65,
  "doctor": Personas[4],
  "paciente": Personas[21],
  "fecha": new Date('2023/09/06'),
  "hora": "17:30 - 18:00",
  "categoria": categorias[4]
},
{
  "id": 66,
  "doctor": Personas[8],
  "paciente": Personas[14],
  "fecha": new Date('2023/10/05'),
  "hora": "09:30 - 10:00",
  "categoria": categorias[5]
},
{
  "id": 67,
  "doctor": Personas[2],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/30'),
  "hora": "12:00 - 12:30",
  "categoria": categorias[6]
},
{
  "id": 68,
  "doctor": Personas[9],
  "paciente": Personas[20],
  "fecha": new Date('2023/09/11'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[7]
},
{
  "id": 69,
  "doctor": Personas[5],
  "paciente": Personas[12],
  "fecha": new Date('2023/08/14'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[8]
},
{
  "id": 70,
  "doctor": Personas[2],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/06'),
  "hora": "20:00 - 20:30",
  "categoria": categorias[9]
},
{
  "id": 71,
  "doctor": Personas[6],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/13'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[0]
},
{
  "id": 72,
  "doctor": Personas[2],
  "paciente": Personas[12],
  "fecha": new Date('2023/08/19'),
  "hora": "20:30 - 21:00",
  "categoria": categorias[1]
},
{
  "id": 73,
  "doctor": Personas[9],
  "paciente": Personas[22],
  "fecha": new Date('2023/10/20'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[2]
},
{
  "id": 74,
  "doctor": Personas[9],
  "paciente": Personas[13],
  "fecha": new Date('2023/08/22'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[3]
},
{
  "id": 75,
  "doctor": Personas[1],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/18'),
  "hora": "18:00 - 18:30",
  "categoria": categorias[4]
},
{
  "id": 76,
  "doctor": Personas[0],
  "paciente": Personas[17],
  "fecha": new Date('2023/08/07'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[5]
},
{
  "id": 77,
  "doctor": Personas[1],
  "paciente": Personas[18],
  "fecha": new Date('2023/10/16'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[6]
},
{
  "id": 78,
  "doctor": Personas[3],
  "paciente": Personas[15],
  "fecha": new Date('2023/10/09'),
  "hora": "08:00 - 08:30",
  "categoria": categorias[7]
},
{
  "id": 79,
  "doctor": Personas[7],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/03'),
  "hora": "17:30 - 18:00",
  "categoria": categorias[8]
},
{
  "id": 80,
  "doctor": Personas[4],
  "paciente": Personas[20],
  "fecha": new Date('2023/09/05'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[9]
},
{
  "id": 81,
  "doctor": Personas[1],
  "paciente": Personas[12],
  "fecha": new Date('2023/08/18'),
  "hora": "14:00 - 14:30",
  "categoria": categorias[0]
},
{
  "id": 82,
  "doctor": Personas[5],
  "paciente": Personas[19],
  "fecha": new Date('2023/10/19'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[1]
},
{
  "id": 83,
  "doctor": Personas[7],
  "paciente": Personas[13],
  "fecha": new Date('2023/10/30'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[2]
},
{
  "id": 84,
  "doctor": Personas[9],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/03'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[3]
},
{
  "id": 85,
  "doctor": Personas[4],
  "paciente": Personas[20],
  "fecha": new Date('2023/10/01'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[4]
},
{
  "id": 86,
  "doctor": Personas[1],
  "paciente": Personas[15],
  "fecha": new Date('2023/08/14'),
  "hora": "20:00 - 20:30",
  "categoria": categorias[5]
},
{
  "id": 87,
  "doctor": Personas[6],
  "paciente": Personas[14],
  "fecha": new Date('2023/09/09'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[6]
},
{
  "id": 88,
  "doctor": Personas[0],
  "paciente": Personas[16],
  "fecha": new Date('2023/08/15'),
  "hora": "19:30 - 20:00",
  "categoria": categorias[7]
},
{
  "id": 89,
  "doctor": Personas[7],
  "paciente": Personas[14],
  "fecha": new Date('2023/08/26'),
  "hora": "14:00 - 14:30",
  "categoria": categorias[8]
},
{
  "id": 90,
  "doctor": Personas[2],
  "paciente": Personas[20],
  "fecha": new Date('2023/09/16'),
  "hora": "12:30 - 13:00",
  "categoria": categorias[9]
},
{
  "id": 91,
  "doctor": Personas[4],
  "paciente": Personas[15],
  "fecha": new Date('2023/10/21'),
  "hora": "08:00 - 08:30",
  "categoria": categorias[0]
},
{
  "id": 92,
  "doctor": Personas[3],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/24'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[1]
},
{
  "id": 93,
  "doctor": Personas[6],
  "paciente": Personas[16],
  "fecha": new Date('2023/10/22'),
  "hora": "16:00 - 16:30",
  "categoria": categorias[2]
},
{
  "id": 94,
  "doctor": Personas[14],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/25'),
  "hora": "13:00 - 13:30",
  "categoria": categorias[3]
},
{
  "id": 95,
  "doctor": Personas[15],
  "paciente": Personas[15],
  "fecha": new Date('2023/09/13'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[4]
},
{
  "id": 96,
  "doctor": Personas[8],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/29'),
  "hora": "09:30 - 10:00",
  "categoria": categorias[5]
},
{
  "id": 97,
  "doctor": Personas[9],
  "paciente": Personas[16],
  "fecha": new Date('2023/09/25'),
  "hora": "12:00 - 12:30",
  "categoria": categorias[6]
},
{
  "id": 98,
  "doctor": Personas[7],
  "paciente": Personas[21],
  "fecha": new Date('2023/10/03'),
  "hora": "17:30 - 18:00",
  "categoria": categorias[7]
},
{
  "id": 99,
  "doctor": Personas[0],
  "paciente": Personas[15],
  "fecha": new Date('2023/08/31'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[8]
},
{
  "id": 100,
  "doctor": Personas[6],
  "paciente": Personas[14],
  "fecha": new Date('2023/09/12'),
  "hora": "20:30 - 21:00",
  "categoria": categorias[9]
},
{
  "id": 101,
  "doctor": Personas[4],
  "paciente": Personas[21],
  "fecha": new Date('2023/10/07'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[0]
},
{
  "id": 102,
  "doctor": Personas[2],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/04'),
  "hora": "20:00 - 20:30",
  "categoria": categorias[1]
},
{
  "id": 103,
  "doctor": Personas[5],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/16'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[2]
},
{
  "id": 104,
  "doctor": Personas[2],
  "paciente": Personas[17],
  "fecha": new Date('2023/08/05'),
  "hora": "12:00 - 12:30",
  "categoria": categorias[3]
},
{
  "id": 105,
  "doctor": Personas[9],
  "paciente": Personas[13],
  "fecha": new Date('2023/09/29'),
  "hora": "17:00 - 17:30",
  "categoria": categorias[4]
},
{
  "id": 106,
  "doctor": Personas[1],
  "paciente": Personas[20],
  "fecha": new Date('2023/08/23'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[5]
},
{
  "id": 107,
  "doctor": Personas[8],
  "paciente": Personas[21],
  "fecha": new Date('2023/09/20'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[6]
},
{
  "id": 108,
  "doctor": Personas[8],
  "paciente": Personas[17],
  "fecha": new Date('2023/09/08'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[7]
},
{
  "id": 109,
  "doctor": Personas[4],
  "paciente": Personas[13],
  "fecha": new Date('2023/10/26'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[8]
},
{
  "id": 110,
  "doctor": Personas[7],
  "paciente": Personas[16],
  "fecha": new Date('2023/08/20'),
  "hora": "19:30 - 20:00",
  "categoria": categorias[9]
},
{
  "id": 111,
  "doctor": Personas[3],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/01'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[0]
},
{
  "id": 112,
  "doctor": Personas[3],
  "paciente": Personas[13],
  "fecha": new Date('2023/10/10'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[1]
},
{
  "id": 113,
  "doctor": Personas[2],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/28'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[2]
},
{
  "id": 114,
  "doctor": Personas[0],
  "paciente": Personas[16],
  "fecha": new Date('2023/08/10'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[3]
},
{
  "id": 115,
  "doctor": Personas[9],
  "paciente": Personas[23],
  "fecha": new Date('2023/08/04'),
  "hora": "19:30 - 20:00",
  "categoria": categorias[4]
},
{
  "id": 116,
  "doctor": Personas[0],
  "paciente": Personas[15],
  "fecha": new Date('2023/08/27'),
  "hora": "13:00 - 13:30",
  "categoria": categorias[5]
},
{
  "id": 117,
  "doctor": Personas[7],
  "paciente": Personas[19],
  "fecha": new Date('2023/10/07'),
  "hora": "15:30 - 16:00",
  "categoria": categorias[6]
},
{
  "id": 118,
  "doctor": Personas[5],
  "paciente": Personas[13],
  "fecha": new Date('2023/08/25'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[7]
},
{
  "id": 119,
  "doctor": Personas[0],
  "paciente": Personas[14],
  "fecha": new Date('2023/08/14'),
  "hora": "18:00 - 18:30",
  "categoria": categorias[8]
},
{
  "id": 120,
  "doctor": Personas[8],
  "paciente": Personas[17],
  "fecha": new Date('2023/08/07'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[9]
},
{
  "id": 121,
  "doctor": Personas[4],
  "paciente": Personas[23],
  "fecha": new Date('2023/10/16'),
  "hora": "18:30 - 19:00",
  "categoria": categorias[0]
},
{
  "id": 122,
  "doctor": Personas[4],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/09'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[1]
},
{
  "id": 123,
  "doctor": Personas[2],
  "paciente": Personas[20],
  "fecha": new Date('2023/09/18'),
  "hora": "11:00 - 11:30",
  "categoria": categorias[2]
},
{
  "id": 124,
  "doctor": Personas[3],
  "paciente": Personas[23],
  "fecha": new Date('2023/08/30'),
  "hora": "17:00 - 17:30",
  "categoria": categorias[3]
},
{
  "id": 125,
  "doctor": Personas[9],
  "paciente": Personas[22],
  "fecha": new Date('2023/09/06'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[4]
},
{
  "id": 126,
  "doctor": Personas[1],
  "paciente": Personas[14],
  "fecha": new Date('2023/08/13'),
  "hora": "20:30 - 21:00",
  "categoria": categorias[5]
},
{
  "id": 127,
  "doctor": Personas[6],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/16'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[6]
},
{
  "id": 128,
  "doctor": Personas[7],
  "paciente": Personas[17],
  "fecha": new Date('2023/08/25'),
  "hora": "12:00 - 12:30",
  "categoria": categorias[7]
},
{
  "id": 129,
  "doctor": Personas[2],
  "paciente": Personas[16],
  "fecha": new Date('2023/09/29'),
  "hora": "18:00 - 18:30",
  "categoria": categorias[8]
},
{
  "id": 130,
  "doctor": Personas[4],
  "paciente": Personas[21],
  "fecha": new Date('2023/10/08'),
  "hora": "13:00 - 13:30",
  "categoria": categorias[9]
},
{
  "id": 131,
  "doctor": Personas[7],
  "paciente": Personas[15],
  "fecha": new Date('2023/08/31'),
  "hora": "09:30 - 10:00",
  "categoria": categorias[0]
},
{
  "id": 132,
  "doctor": Personas[1],
  "paciente": Personas[22],
  "fecha": new Date('2023/09/23'),
  "hora": "12:30 - 13:00",
  "categoria": categorias[1]
},
{
  "id": 133,
  "doctor": Personas[6],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/06'),
  "hora": "20:00 - 20:30",
  "categoria": categorias[2]
},
{
  "id": 134,
  "doctor": Personas[8],
  "paciente": Personas[17],
  "fecha": new Date('2023/09/14'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[3]
},
{
  "id": 135,
  "doctor": Personas[5],
  "paciente": Personas[14],
  "fecha": new Date('2023/10/03'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[4]
},
{
  "id": 136,
  "doctor": Personas[2],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/11'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[5]
},
{
  "id": 137,
  "doctor": Personas[0],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/29'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[6]
},
{
  "id": 138,
  "doctor": Personas[4],
  "paciente": Personas[17],
  "fecha": new Date('2023/09/21'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[7]
},
{
  "id": 139,
  "doctor": Personas[2],
  "paciente": Personas[19],
  "fecha": new Date('2023/10/01'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[8]
},
{
  "id": 140,
  "doctor": Personas[8],
  "paciente": Personas[16],
  "fecha": new Date('2023/08/12'),
  "hora": "19:30 - 20:00",
  "categoria": categorias[9]
},
{
  "id": 141,
  "doctor": Personas[4],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/23'),
  "hora": "08:00 - 08:30",
  "categoria": categorias[0]
},
{
  "id": 142,
  "doctor": Personas[7],
  "paciente": Personas[23],
  "fecha": new Date('2023/09/27'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[1]
},
{
  "id": 143,
  "doctor": Personas[2],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/14'),
  "hora": "18:00 - 18:30",
  "categoria": categorias[2]
},
{
  "id": 144,
  "doctor": Personas[6],
  "paciente": Personas[15],
  "fecha": new Date('2023/10/05'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[3]
},
{
  "id": 145,
  "doctor": Personas[3],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/19'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[4]
},
{
  "id": 146,
  "doctor": Personas[9],
  "paciente": Personas[23],
  "fecha": new Date('2023/08/11'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[5]
},
{
  "id": 147,
  "doctor": Personas[4],
  "paciente": Personas[18],
  "fecha": new Date('2023/08/25'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[6]
},
{
  "id": 148,
  "doctor": Personas[6],
  "paciente": Personas[22],
  "fecha": new Date('2023/09/02'),
  "hora": "15:30 - 16:00",
  "categoria": categorias[7]
},
{
  "id": 149,
  "doctor": Personas[2],
  "paciente": Personas[17],
  "fecha": new Date('2023/10/10'),
  "hora": "12:00 - 12:30",
  "categoria": categorias[8]
},
{
  "id": 150,
  "doctor": Personas[4],
  "paciente": Personas[16],
  "fecha": new Date('2023/09/07'),
  "hora": "17:30 - 18:00",
  "categoria": categorias[9]
},
{
  "id": 151,
  "doctor": Personas[7],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/13'),
  "hora": "13:00 - 13:30",
  "categoria": categorias[0]
},
{
  "id": 152,
  "doctor": Personas[1],
  "paciente": Personas[19],
  "fecha": new Date('2023/09/10'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[1]
},
{
  "id": 153,
  "doctor": Personas[6],
  "paciente": Personas[15],
  "fecha": new Date('2023/08/01'),
  "hora": "20:30 - 21:00",
  "categoria": categorias[2]
},
{
  "id": 154,
  "doctor": Personas[8],
  "paciente": Personas[18],
  "fecha": new Date('2023/08/08'),
  "hora": "09:30 - 10:00",
  "categoria": categorias[3]
},
{
  "id": 155,
  "doctor": Personas[5],
  "paciente": Personas[23],
  "fecha": new Date('2023/09/15'),
  "hora": "18:30 - 19:00",
  "categoria": categorias[4]
},
{
  "id": 156,
  "doctor": Personas[2],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/28'),
  "hora": "15:00 - 15:30",
  "categoria": categorias[5]
},
{
  "id": 157,
  "doctor": Personas[6],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/06'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[6]
},
{
  "id": 158,
  "doctor": Personas[7],
  "paciente": Personas[17],
  "fecha": new Date('2023/09/14'),
  "hora": "14:00 - 14:30",
  "categoria": categorias[7]
},
{
  "id": 159,
  "doctor": Personas[2],
  "paciente": Personas[16],
  "fecha": new Date('2023/08/21'),
  "hora": "18:30 - 19:00",
  "categoria": categorias[8]
},
{
  "id": 160,
  "doctor": Personas[4],
  "paciente": Personas[21],
  "fecha": new Date('2023/08/30'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[9]
},
{
  "id": 161,
  "doctor": Personas[7],
  "paciente": Personas[15],
  "fecha": new Date('2023/08/16'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[0]
},
{
  "id": 162,
  "doctor": Personas[1],
  "paciente": Personas[22],
  "fecha": new Date('2023/09/13'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[1]
},
{
  "id": 163,
  "doctor": Personas[6],
  "paciente": Personas[19],
  "fecha": new Date('2023/08/31'),
  "hora": "08:00 - 08:30",
  "categoria": categorias[2]
},
{
  "id": 164,
  "doctor": Personas[8],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/19'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[3]
},
{
  "id": 165,
  "doctor": Personas[5],
  "paciente": Personas[23],
  "fecha": new Date('2023/10/07'),
  "hora": "20:00 - 20:30",
  "categoria": categorias[4]
},
{
  "id": 166,
  "doctor": Personas[2],
  "paciente": Personas[18],
  "fecha": new Date('2023/08/13'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[5]
},
{
  "id": 167,
  "doctor": Personas[0],
  "paciente": Personas[21],
  "fecha": new Date('2023/09/25'),
  "hora": "10:00 - 10:30",
  "categoria": categorias[6]
},
{
  "id": 168,
  "doctor": Personas[4],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/23'),
  "hora": "20:30 - 21:00",
  "categoria": categorias[7]
},
{
  "id": 169,
  "doctor": Personas[2],
  "paciente": Personas[17],
  "fecha": new Date('2023/09/04'),
  "hora": "17:00 - 17:30",
  "categoria": categorias[8]
},
{
  "id": 170,
  "doctor": Personas[8],
  "paciente": Personas[16],
  "fecha": new Date('2023/08/09'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[9]
},
{
  "id": 171,
  "doctor": Personas[4],
  "paciente": Personas[22],
  "fecha": new Date('2023/10/02'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[0]
},
{
  "id": 172,
  "doctor": Personas[7],
  "paciente": Personas[23],
  "fecha": new Date('2023/08/19'),
  "hora": "19:30 - 20:00",
  "categoria": categorias[1]
},
{
  "id": 173,
  "doctor": Personas[9],
  "paciente": Personas[21],
  "fecha": new Date('2023/09/11'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[2]
},
{
  "id": 174,
  "doctor": Personas[4],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/28'),
  "hora": "18:30 - 19:00",
  "categoria": categorias[3]
},
{
  "id": 175,
  "doctor": Personas[2],
  "paciente": Personas[19],
  "fecha": new Date('2023/10/16'),
  "hora": "16:00 - 16:30",
  "categoria": categorias[4]
},
{
  "id": 176,
  "doctor": Personas[8],
  "paciente": Personas[16],
  "fecha": new Date('2023/08/17'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[5]
},
{
  "id": 177,
  "doctor": Personas[6],
  "paciente": Personas[23],
  "fecha": new Date('2023/09/12'),
  "hora": "08:00 - 08:30",
  "categoria": categorias[6]
},
{
  "id": 178,
  "doctor": Personas[2],
  "paciente": Personas[17],
  "fecha": new Date('2023/10/09'),
  "hora": "11:30 - 12:00",
  "categoria": categorias[7]
},
{
  "id": 179,
  "doctor": Personas[4],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/24'),
  "hora": "20:00 - 20:30",
  "categoria": categorias[8]
},
{
  "id": 180,
  "doctor": Personas[7],
  "paciente": Personas[16],
  "fecha": new Date('2023/09/03'),
  "hora": "17:30 - 18:00",
  "categoria": categorias[9]
},
{
  "id": 181,
  "doctor": Personas[1],
  "paciente": Personas[22],
  "fecha": new Date('2023/10/11'),
  "hora": "13:00 - 13:30",
  "categoria": categorias[0]
},
{
  "id": 182,
  "doctor": Personas[6],
  "paciente": Personas[19],
  "fecha": new Date('2023/09/18'),
  "hora": "09:30 - 10:00",
  "categoria": categorias[1]
},
{
  "id": 183,
  "doctor": Personas[8],
  "paciente": Personas[18],
  "fecha": new Date('2023/08/25'),
  "hora": "12:30 - 13:00",
  "categoria": categorias[2]
},
{
  "id": 184,
  "doctor": Personas[5],
  "paciente": Personas[23],
  "fecha": new Date('2023/09/21'),
  "hora": "16:30 - 17:00",
  "categoria": categorias[3]
},
{
  "id": 185,
  "doctor": Personas[2],
  "paciente": Personas[18],
  "fecha": new Date('2023/08/03'),
  "hora": "14:00 - 14:30",
  "categoria": categorias[4]
},
{
  "id": 186,
  "doctor": Personas[6],
  "paciente": Personas[19],
  "fecha": new Date('2023/10/14'),
  "hora": "15:00 - 15:30",
  "categoria": categorias[5]
},
{
  "id": 187,
  "doctor": Personas[7],
  "paciente": Personas[16],
  "fecha": new Date('2023/09/24'),
  "hora": "10:30 - 11:00",
  "categoria": categorias[6]
},
{
  "id": 188,
  "doctor": Personas[2],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/10'),
  "hora": "09:00 - 09:30",
  "categoria": categorias[7]
},
{
  "id": 189,
  "doctor": Personas[4],
  "paciente": Personas[17],
  "fecha": new Date('2023/10/02'),
  "hora": "17:00 - 17:30",
  "categoria": categorias[8]
},
{
  "id": 190,
  "doctor": Personas[6],
  "paciente": Personas[16],
  "fecha": new Date('2023/08/12'),
  "hora": "19:30 - 20:00",
  "categoria": categorias[9]
},
{
  "id": 191,
  "doctor": Personas[8],
  "paciente": Personas[23],
  "fecha": new Date('2023/08/20'),
  "hora": "09:30 - 10:00",
  "categoria": categorias[0]
},
{
  "id": 192,
  "doctor": Personas[5],
  "paciente": Personas[19],
  "fecha": new Date('2023/09/17'),
  "hora": "13:00 - 13:30",
  "categoria": categorias[1]
},
{
  "id": 193,
  "doctor": Personas[2],
  "paciente": Personas[22],
  "fecha": new Date('2023/08/28'),
  "hora": "12:30 - 13:00",
  "categoria": categorias[2]
},
{
  "id": 194,
  "doctor": Personas[6],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/05'),
  "hora": "14:30 - 15:00",
  "categoria": categorias[3]
},
{
  "id": 195,
  "doctor": Personas[4],
  "paciente": Personas[16],
  "fecha": new Date('2023/10/15'),
  "hora": "17:30 - 18:00",
  "categoria": categorias[4]
},
{
  "id": 196,
  "doctor": Personas[2],
  "paciente": Personas[23],
  "fecha": new Date('2023/08/08'),
  "hora": "19:00 - 19:30",
  "categoria": categorias[5]
},
{
  "id": 197,
  "doctor": Personas[8],
  "paciente": Personas[19],
  "fecha": new Date('2023/09/30'),
  "hora": "16:00 - 16:30",
  "categoria": categorias[6]
},
{
  "id": 198,
  "doctor": Personas[4],
  "paciente": Personas[21],
  "fecha": new Date('2023/10/24'),
  "hora": "11:00 - 11:30",
  "categoria": categorias[7]
},
{
  "id": 199,
  "doctor": Personas[7],
  "paciente": Personas[18],
  "fecha": new Date('2023/09/07'),
  "hora": "08:30 - 09:00",
  "categoria": categorias[8]
},
{
  "id": 200,
  "doctor": Personas[1],
  "paciente": Personas[17],
  "fecha": new Date('2023/08/26'),
  "hora": "20:30 - 21:00",
  "categoria": categorias[9]
}
    ];
    