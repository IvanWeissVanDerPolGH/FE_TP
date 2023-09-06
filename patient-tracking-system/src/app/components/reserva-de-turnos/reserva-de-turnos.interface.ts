export interface ReservaDeTurno_interface {
  id: number; // ID único de la reserva
  doctor: string; // Nombre del doctor
  paciente: string; // Nombre del paciente
  fecha: Date; // Fecha de la reserva
  horario: string; // Horario de la reserva (por ejemplo, "09:00 - 10:00")
}
