import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon,
    LoginIcon,
    MoodHappyIcon,
    TypographyIcon,
    UserPlusIcon,
    BrandSteamIcon,
    DeviceGamepad2Icon
} from 'vue-tabler-icons';
import { IconBrandOffice } from '@tabler/icons-vue';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    { header: 'DST' },
    {
        title: '房间设置',
        icon: DeviceGamepad2Icon,
        to: '/dst'
    },
    {
        title: 'Mods',
        icon: TypographyIcon,
        to: '/dst/mods'
    },
    {
        title: 'Rooms',
        icon: TypographyIcon,
        to: '/dst/rooms'
    },
    { header: 'Steam' },
    {
        title: 'Steam',
        icon: BrandSteamIcon,
        to: '/steam'
    },
    { header: 'univer' },
    {
        title: 'Univer',
        icon: IconBrandOffice,
        to: '/univer'
    },
    {
        title: 'Typography',
        icon: TypographyIcon,
        to: '/ui/typography'
    },
    {
        title: 'Shadow',
        icon: CopyIcon,
        to: '/ui/shadow'
    },
    { header: 'auth' },
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/auth/login'
    },
    {
        title: 'Register',
        icon: UserPlusIcon,
        to: '/auth/register'
    },
    { header: 'Extra' },
    {
        title: 'Icons',
        icon: MoodHappyIcon,
        to: '/icons'
    },
    {
        title: 'Sample Page',
        icon: ApertureIcon,
        to: '/sample-page'
    },
];

export default sidebarItem;
