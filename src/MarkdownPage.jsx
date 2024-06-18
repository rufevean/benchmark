
import React from 'react';
import './MarkdownPage.css';
import './ac.css';

function MarkdownPage() {
  return (
    <div className="markdown-container">
            <div className="animated-static-bg"></div>

      <h1>Resources</h1>

      <h2>Tools I Use</h2>
      <ul>
        <li><a href="https://neovim.io/">Neovim</a> - The best Text Editor</li>
        <li><a href="https://github.com/tmux/tmux/wiki">Tmux</a> - A terminal multiplexer</li>
        <li><a href="https://wezfurlong.org/wezterm/">Wezterm</a> - A terminal emulator</li>
        <li><a href="https://spicetify.app/">Spiceify</a> - Customizing Spotify</li>
        <li><a href="https://ohmyz.sh/">Zsh</a> - A shell with oh-my-zsh for plugins</li>
      </ul>


      <h2>My Dotfiles</h2>
      <ul>
        <li><a href="https://github.com/rufevean/dotfiles">i3, Zsh, wezterm</a></li>
        <li><a href="https://github.com/rufevean/nvim">Nvim</a></li>
      </ul>

      <h2>Good Repositories</h2>
      <ul>
        <li><a href="https://github.com/zwang4/awesome-machine-learning-in-compilers">Awesome-Machine-Learning-In-Compilers</a> - A curated list of awesome machine learning techniques in compilers research.</li>
        <li><a href="https://github.com/rockerBOO/awesome-neovim">Awesome-Neovim</a> - collection of awesome neovim plugins</li>
        <li><a href="https://github.com/gurugio/lowlevelprogramming-university">lowlevelprogramming-university</a> - How to be low-level programmer</li>
        <li><a href="https://github.com/codecrafters-io/build-your-own-x">Build-your-own-x</a> - Build your own (insert technology here), really good for practical learning.</li>
      </ul>

      <h2>Good Websites if You Want to Learn About Compilers</h2>
      <ul>
        <li><a href="https://craftinginterpreters.com/">Crafting Interpreters</a> - A handbook for making programming languages</li>
        <li><a href="https://github.com/aalhour/awesome-compilers">Awesome-Compilers</a> - A curated list of awesome resources on compilers, interpreters, and runtimes.</li>
        <li><a href="https://llvm.org/">LLVM</a> - The LLVM Compiler Infrastructure Project</li>
        <li><a href="https://godbolt.org/">Compiler Explorer</a> - An interactive compiler</li>
        <li><a href="http://c9x.me/compile/bib/">The compiler writer resource page</a> - A list of resources for compiler writers</li>
      </ul>

      <h2>Languages I Recommend</h2>
      <ul>
        <li><a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a></li>
        <li><a href="https://www.rust-lang.org/">Rust</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Forth_(programming_language)">Forth</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)">Bash</a></li>
      </ul>
    </div>
  );
}

export default MarkdownPage;
