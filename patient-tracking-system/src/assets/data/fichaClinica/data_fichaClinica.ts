import { FichaClinica } from "src/app/components/ficha-clinica/ficha-clinica.interface"
import { data_DatosDeReservas as Reservas } from "../reserva/data_reserva"
import { Data_consulta as Categoria } from "../consulta/data_consulta";
import { Data_RegistroDePersonas as Personas } from "../RegistroDePersonas/RegistroDePersonas";

export const Data_fichasClinicas: FichaClinica[] = [
  {
    "id": 1,
    "paciente": Personas[10],
    "doctor": Personas[0],
    "motivoConsulta": "Dolor de cabeza",
    "diagnostico": "Migraña",
    "fecha": new Date('2023/10/27'),
    "reserva": Reservas[42],
    "categoria": Categoria[5]
  },
  {
    "id": 2,
    "paciente": Personas[11],
    "doctor": Personas[1],
    "motivoConsulta": "Fiebre",
    "diagnostico": "Resfriado común",
    "fecha": new Date('2023/10/26'),
    "reserva": Reservas[108],
    "categoria": Categoria[8]
  },
  {
    "id": 3,
    "paciente": Personas[12],
    "doctor": Personas[2],
    "motivoConsulta": "Dolor abdominal",
    "diagnostico": "Apendicitis",
    "fecha": new Date('2023/10/25'),
    "reserva": Reservas[54],
    "categoria": Categoria[2]
  },
  {
    "id": 4,
    "paciente": Personas[13],
    "doctor": Personas[3],
    "motivoConsulta": "Fatiga",
    "diagnostico": "Anemia",
    "fecha": new Date('2023/10/22'),
    "reserva": Reservas[92],
    "categoria": Categoria[7]
  },
  {
    "id": 5,
    "paciente": Personas[14],
    "doctor": Personas[4],
    "motivoConsulta": "Dolor en el pecho",
    "diagnostico": "Infarto de miocardio",
    "fecha": new Date('2023/09/15'),
    "reserva": Reservas[154],
    "categoria": Categoria[1]
  },
  {
    "id": 6,
    "paciente": Personas[15],
    "doctor": Personas[5],
    "motivoConsulta": "Náuseas",
    "diagnostico": "Gastritis",
    "fecha": new Date('2023/08/30'),
    "reserva": Reservas[66],
    "categoria": Categoria[6]
  },
  {
    "id": 7,
    "paciente": Personas[16],
    "doctor": Personas[6],
    "motivoConsulta": "Problemas respiratorios",
    "diagnostico": "Asma",
    "fecha": new Date('2023/09/20'),
    "reserva": Reservas[37],
    "categoria": Categoria[4]
  },
  {
    "id": 8,
    "paciente": Personas[17],
    "doctor": Personas[7],
    "motivoConsulta": "Dolor de espalda",
    "diagnostico": "Hernia de disco",
    "fecha": new Date('2023/10/16'),
    "reserva": Reservas[174],
    "categoria": Categoria[3]
  },
  {
    "id": 9,
    "paciente": Personas[18],
    "doctor": Personas[8],
    "motivoConsulta": "Dolor de garganta",
    "diagnostico": "Amigdalitis",
    "fecha": new Date('2023/09/17'),
    "reserva": Reservas[50],
    "categoria": Categoria[9]
  },
  {
    "id": 10,
    "paciente": Personas[19],
    "doctor": Personas[9],
    "motivoConsulta": "Mareos",
    "diagnostico": "Vértigo",
    "fecha": new Date('2023/09/06'),
    "reserva": Reservas[124],
    "categoria": Categoria[0]
  },
  {
    "id": 11,
    "paciente": Personas[20],
    "doctor": Personas[0],
    "motivoConsulta": "Dolor de cabeza",
    "diagnostico": "Migraña",
    "fecha": new Date('2023/10/09'),
    "reserva": Reservas[33],
    "categoria": Categoria[7]
  },
  {
    "id": 12,
    "paciente": Personas[21],
    "doctor": Personas[1],
    "motivoConsulta": "Fiebre",
    "diagnostico": "Resfriado común",
    "fecha": new Date('2023/09/11'),
    "reserva": Reservas[172],
    "categoria": Categoria[2]
  },
  {
    "id": 13,
    "paciente": Personas[22],
    "doctor": Personas[2],
    "motivoConsulta": "Dolor abdominal",
    "diagnostico": "Apendicitis",
    "fecha": new Date('2023/09/18'),
    "reserva": Reservas[43],
    "categoria": Categoria[5]
  },
  {
    "id": 14,
    "paciente": Personas[23],
    "doctor": Personas[3],
    "motivoConsulta": "Fatiga",
    "diagnostico": "Anemia",
    "fecha": new Date('2023/08/25'),
    "reserva": Reservas[93],
    "categoria": Categoria[8]
  },
  {
    "id": 15,
    "paciente": Personas[10],
    "doctor": Personas[4],
    "motivoConsulta": "Dolor en el pecho",
    "diagnostico": "Infarto de miocardio",
    "fecha": new Date('2023/08/04'),
    "reserva": Reservas[114],
    "categoria": Categoria[4]
  },
  {
    "id": 16,
    "paciente": Personas[11],
    "doctor": Personas[5],
    "motivoConsulta": "Náuseas",
    "diagnostico": "Gastritis",
    "fecha": new Date('2023/08/26'),
    "reserva": Reservas[88],
    "categoria": Categoria[1]
  },
  {
    "id": 17,
    "paciente": Personas[12],
    "doctor": Personas[6],
    "motivoConsulta": "Problemas respiratorios",
    "diagnostico": "Asma",
    "fecha": new Date('2023/08/01'),
    "reserva": Reservas[0],
    "categoria": Categoria[3]
  },
  {
    "id": 18,
    "paciente": Personas[13],
    "doctor": Personas[7],
    "motivoConsulta": "Dolor de espalda",
    "diagnostico": "Hernia de disco",
    "fecha": new Date('2023/08/14'),
    "reserva": Reservas[142],
    "categoria": Categoria[6]
  },
  {
    "id": 19,
    "paciente": Personas[14],
    "doctor": Personas[8],
    "motivoConsulta": "Dolor de garganta",
    "diagnostico": "Amigdalitis",
    "fecha": new Date('2023/10/07'),
    "reserva": Reservas[116],
    "categoria": Categoria[9]
  },
  {
    "id": 20,
    "paciente": Personas[15],
    "doctor": Personas[9],
    "motivoConsulta": "Mareos",
    "diagnostico": "Vértigo",
    "fecha": new Date('2023/08/16'),
    "reserva": Reservas[102],
    "categoria": Categoria[0]
  },
  {
    "id": 21,
    "paciente": Personas[16],
    "doctor": Personas[0],
    "motivoConsulta": "Dolor de cabeza",
    "diagnostico": "Migraña",
    "fecha": new Date('2023/10/08'),
    "reserva": Reservas[129],
    "categoria": Categoria[4]
  },
  {
    "id": 22,
    "paciente": Personas[17],
    "doctor": Personas[1],
    "motivoConsulta": "Fiebre",
    "diagnostico": "Resfriado común",
    "fecha": new Date('2023/08/16'),
    "reserva": Reservas[49],
    "categoria": Categoria[2]
  },
  {
    "id": 23,
    "paciente": Personas[18],
    "doctor": Personas[2],
    "motivoConsulta": "Dolor abdominal",
    "diagnostico": "Apendicitis",
    "fecha": new Date('2023/08/14'),
    "reserva": Reservas[29],
    "categoria": Categoria[8]
  },
  {
    "id": 24,
    "paciente": Personas[19],
    "doctor": Personas[3],
    "motivoConsulta": "Fatiga",
    "diagnostico": "Anemia",
    "fecha": new Date('2023/08/11'),
    "reserva": Reservas[145],
    "categoria": Categoria[7]
  },
  {
    "id": 25,
    "paciente": Personas[20],
    "doctor": Personas[4],
    "motivoConsulta": "Dolor en el pecho",
    "diagnostico": "Infarto de miocardio",
    "fecha": new Date('2023/08/08'),
    "reserva": Reservas[195],
    "categoria": Categoria[3]
  },
  {
    "id": 26,
    "paciente": Personas[21],
    "doctor": Personas[5],
    "motivoConsulta": "Náuseas",
    "diagnostico": "Gastritis",
    "fecha": new Date('2023/08/01'),
    "reserva": Reservas[152],
    "categoria": Categoria[9]
  },
  {
    "id": 27,
    "paciente": Personas[22],
    "doctor": Personas[6],
    "motivoConsulta": "Problemas respiratorios",
    "diagnostico": "Asma",
    "fecha": new Date('2023/08/23'),
    "reserva": Reservas[168],
    "categoria": Categoria[5]
  },
  {
    "id": 28,
    "paciente": Personas[23],
    "doctor": Personas[7],
    "motivoConsulta": "Dolor de espalda",
    "diagnostico": "Hernia de disco",
    "fecha": new Date('2023/09/03'),
    "reserva": Reservas[24],
    "categoria": Categoria[6]
  },
  {
    "id": 29,
    "paciente": Personas[10],
    "doctor": Personas[8],
    "motivoConsulta": "Dolor de garganta",
    "diagnostico": "Amigdalitis",
    "fecha": new Date('2023/08/13'),
    "reserva": Reservas[165],
    "categoria": Categoria[1]
  },
  {
    "id": 30,
    "paciente": Personas[11],
    "doctor": Personas[9],
    "motivoConsulta": "Mareos",
    "diagnostico": "Vértigo",
    "fecha": new Date('2023/08/19'),
    "reserva": Reservas[34],
    "categoria": Categoria[0]
  }
]

