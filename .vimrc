" (>^.^<)

set relativenumber
set scrolloff=6
set showcmd
set ruler

set number                      " 显示行号
imap <c-d> <esc>
inoremap jk <esc>               " 在normal状态用 快速按下 jk 映射到 ESC
set statusline=%l               " 当前行号
set statusline+=/               " 分隔符
set statusline+=%L              " 总行数
set statusline+=\               " 分隔符
set statusline+=%f              " 文件路径
set statusline+=\ -\            " 分隔符
set statusline+=FileType        " 标签
set statusline+=%y              " 文件类型
set wildmenu                    " vim 自身命令行模式智能补全
set mouse=a                     " 启动对鼠标的支持

set cursorline                  " 显示行线
set showtabline=2               " 显示tab
set splitbelow                  " 新开视窗在下方
set splitright                  " 新开视窗在右边

" 关于搜索
set ignorecase                  " 搜索忽略大小写
set incsearch                   " 渐进式搜索
set hlsearch incsearch          " 搜索到匹陪字符串时高亮
set smartcase

" 语法高亮
syntax on
colorscheme darkblue            " 设置语法主题 default、darkblue。具体值可以去官网查看

" 文件类型 filetype
filetype on
filetype indent on
filetype plugin on

set softtabstop=4
set shiftwidth=4
set expandtab

set wrap
set linebreak

set showmode

set list                        " 设定看不到的东西


" 让配置变更立即生效
" autocmd BufWritePost $MYVIMRC source $MYVIMRC 
