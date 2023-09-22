import {
  Home,
  CalendarDays,
  UserCircle2,
  Bell,
  Users,
  HelpCircle,
  Target,
  Pen,
  LucideIcon,
} from 'lucide-react';

interface DashboardLinks {
  label: string;
  url: string;
  icon: LucideIcon;
}

export const MAIN_MENU_LINKS = [
  {
    label: 'Projectos',
    url: '/projectos-sociais',
  },
  {
    label: 'Organizações',
    url: '/organizacoes-sociais',
  },
  {
    label: 'Eventos',
    url: '/eventos',
  },
];

export const USER_MENU_LINKS = [
  {
    label: 'Minha área',
    url: '/usuario/home',
    icon: Home,
  },
  {
    label: 'Editar perfil',
    url: '/usuario/editar-perfil',
    icon: Pen,
  },
];

export const USER_DASHBOARD_LINKS: DashboardLinks[] = [
  {
    label: 'Dashboard',
    url: '/usuario/home',
    icon: Home,
  },
  {
    label: 'Organizações',
    url: '/usuario/organizacoes',
    icon: Users,
  },
  {
    label: 'Projectos',
    url: '/usuario/projectos',
    icon: Target,
  },
  {
    label: 'Eventos',
    url: '/usuario/eventos',
    icon: CalendarDays,
  },
  {
    label: 'Perfil',
    url: '/usuario/perfil',
    icon: UserCircle2,
  },
  {
    label: 'Alertas',
    url: '/usuario/alertas',
    icon: Bell,
  },
  {
    label: 'Ajuda',
    url: '/usuario/ajuda',
    icon: HelpCircle,
  },
];
