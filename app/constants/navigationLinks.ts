import {
  Home,
  CalendarDays,
  UserCircle2,
  Users,
  HelpCircle,
  Target,
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
    label: 'Painel',
    url: '/usuario/home',
    icon: Home,
  },
  {
    label: 'Perfil',
    url: '/usuario/perfil',
    icon: UserCircle2,
  },
  {
    label: 'Ajuda',
    url: '/usuario/ajuda',
    icon: HelpCircle,
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
    label: 'Ajuda',
    url: '/usuario/ajuda',
    icon: HelpCircle,
  },
];

export const ORG_MENU_LINKS = [
  {
    label: 'Painel',
    url: '/organizacao/home',
    icon: Home,
  },
  {
    label: 'Perfil',
    url: '/organizacao/perfil',
    icon: UserCircle2,
  },
  {
    label: 'Ajuda',
    url: '/organizacao/ajuda',
    icon: HelpCircle,
  },
];

export const ORG_DASHBOARD_LINKS: DashboardLinks[] = [
  {
    label: 'Dashboard',
    url: '/organizacao/home',
    icon: Home,
  },
  {
    label: 'Projectos',
    url: '/organizacao/projectos',
    icon: Target,
  },
  {
    label: 'Eventos',
    url: '/organizacao/eventos',
    icon: CalendarDays,
  },
  {
    label: 'Perfil',
    url: '/organizacao/perfil',
    icon: UserCircle2,
  },
  {
    label: 'Ajuda',
    url: '/organizacao/ajuda',
    icon: HelpCircle,
  },
];
