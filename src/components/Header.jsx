import chefClaudeLogo from '../assets/chef-claude-icon.png'

export function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="Chef Claude logo" />
            <h1>Chef Qwen</h1>
        </header>
    );
}