
export interface BookingRequest {
  fullName: string;
  serviceType: string;
  departmentId: number | null;
  cityId: number | null;
  smsNotifications: boolean;
  acceptTerms: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

export const AVAILABLE_SERVICES: ServiceCategory[] = [
  { id: 'academic', name: 'Tutoría Académica de Móviles', description: 'Sesión 1 a 1 de refuerzo' },
  { id: 'hardware_lab', name: 'Préstamo de Laboratorio IoT / Móvil', description: 'Acceso a dispositivos de prueba' },
  { id: 'project_review', name: 'Revisión Proyecto Corte 3 (20%)', description: 'Feedback de arquitectura' },
  { id: 'tech_support', name: 'Soporte Técnico de Herramientas', description: 'Configuración SDK / Android Studio' }
];
