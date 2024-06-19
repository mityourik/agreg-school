import styles from './Header.module.scss';
import Search from './Search/Search';
import mainLogo from '../../vendor/icons/main-logo-biola.svg';
import { EmailIcon } from '../../assets/email';
import { CallIcon } from '../../assets/Call';
import { VkIcon } from '../../assets/Vk';
import { YoutubeIcon } from '../../assets/Youtube';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles['header__contact-info']}>
            <div className={styles['header__contact-info__mail-and-phone__container']}>
                <a href="mailto:info@1eeg.ru" className={styles['header__contact-link_mail']}>
                    <EmailIcon className={styles['header__contact-link_mail_icon']} />
                    info@1eeg.ru
                </a>
                <a href="tel:+79774813028" className={styles['header__contact-link_phone']}>
                    <CallIcon className={styles['header__contact-link_phone_icon']} />
                    +7 (977) 481-30-28
                </a>
            </div>
            <div className={styles['header__contact-info__social-and-search__container']}>
                <div className={styles['header__social-media']}>
                    <a href="https://vk.com" className={styles['header__social-link_vk']}>
                        <VkIcon className={styles['header__social-link_vk_icon']} />
                    </a>
                    <a href="https://youtube.com" className={styles['header__social-link_youtube']}>
                        <YoutubeIcon className={styles['header__social-link_youtube_icon']} />
                    </a>
                </div>
                <Search />
            </div>
        </div>
        <div className={styles['header__logo-and-nav']}>
            <div className={styles['header__logo']}>
                <img className={styles['header__logo-image']} alt="Первая школа ЭЭГ-техников" src={mainLogo} />
                <span className={styles['header__logo-text']}>НПФ &laquo;Биола&raquo;</span>
            </div>
            <nav className={styles['header__nav']}>
                <ul className={styles['header__nav-list']}>
                    <li className={styles['header__nav-item']}>
                        <a href="#about" className={styles['header__nav-link']}>
                            О школе <span className={styles['header__nav-arrow']}>▼</span>
                        </a>
                        <ul className={styles['dropdown']}>
                            <li><a href="#about-us" className={styles['dropdown-link']}>О нас</a></li>
                            <li><a href="#team" className={styles['dropdown-link']}>Команда</a></li>
                        </ul>
                    </li>
                    <li className={styles['header__nav-item']}>
                        <a href="#training" className={styles['header__nav-link']}>
                            Обучение <span className={styles['header__nav-arrow']}>▼</span>
                        </a>
                        <ul className={styles['dropdown']}>
                            <li><a href="#courses" className={styles['dropdown-link']}>Курсы</a></li>
                            <li><a href="#schedule" className={styles['dropdown-link']}>Расписание</a></li>
                        </ul>
                    </li>
                    <li className={styles['header__nav-item']}><a href="#information" className={styles['header__nav-link']}>Информации</a></li>
                    <li className={styles['header__nav-item']}><a href="#conference" className={styles['header__nav-link']}>Конференция</a></li>
                    <li className={styles['header__nav-item']}><a href="#clinical-work" className={styles['header__nav-link']}>Клиническая работа</a></li>
                    <li className={styles['header__nav-item']}><a href="#contacts" className={styles['header__nav-link']}>Контакты</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
