import{s as Yh,a as wd,e as yh,n as ec}from"../chunks/scheduler.BWDpjmD3.js";import{S as tc,i as nc,k as l,l as p,m,n as o,o as $,p as g,e as d,s as i,t as h,H as M,c as u,q as _,f as a,a as C,b as c,d as t,r as A,u as v,g as r,h as s}from"../chunks/index.B94w8w-u.js";import{P as rc,g as sc,a as Mh}from"../chunks/post_layout.B_wEXjdd.js";import{I as f}from"../chunks/footer.BIME2Dow.js";function ic(zi){let x,ve='<a href="#gpo-相關設定">GPO 相關設定</a>',oe,X,R='<a href="#初次登錄動畫關閉">初次登錄動畫關閉</a>',Z,$e,Sd="打開 GPO，找到「<strong>Administrative Templates\\System\\Logon</strong>」中的「<strong>Show first sign-in animation</strong>」，設定為 <strong>Disable</strong>，再執行 <code>gpupdate /force</code>來立即套用更新",Fl,Ee,kd='<a href="#禁止存取控制台設定">禁止存取控制台設定</a>',Ol,Ce,Co,Qi,Pd="Enabled",wo,Zt,Il,De,Hd='<a href="#限制或禁止使用者使用特定應用程式">限制或禁止使用者使用特定應用程式</a>',Ul,re,So,Yt,ko,Xi,Td="Enabled",Po,en,Wl,Re,xd='<a href="#設定在-logon-ui-看不到上個登入的使用者">設定在 Logon UI 看不到上個登入的使用者</a>',Bl,we,Ho,Zi,yd="Enabled",To,tn,Gl,be,Md='<a href="#登入時自動掛載共享資料夾">登入時自動掛載共享資料夾</a>',Vl,nn,Ad="Step 1. 製作 Bash Script",Jl,Oa,Lh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>// 掛載 \\windc.nsc49.skills.twweb 網路位置到電腦，且磁碟代號為 W:
net use W: /delete
net use W: \\windc.nsc49.skills.twweb</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Ia,ge,xo,rn,yo,sn,Mo,jl,Ne,Ld='<a href="#若共享資料夾有跨網域">若共享資料夾有跨網域</a>',ql,an,Ed="只需讓 Script 使用網域管理員身分登入即可：",Kl,Ua,Eh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>// 掛載 \\windc.nsc49.skills.twweb 網路位置到電腦，且磁碟代號為 W:，使用 AD/Administrator 身分來登入
net use W: /delete
net use W: \\windc.nsc49.skills.twweb /user:ADAdministrator Skills39 /p:yes</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Wa,Fe,Dd='<a href="#讓-windows-server-也能掛載-debian-smbd">讓 Windows Server 也能掛載 Debian SMBD</a>',zl,Se,Ao,Yi,Rd="Enabled",Lo,ln,Ql,Oe,bd='<a href="#gpo-個別使用者套用規則">GPO 個別使用者套用規則</a>',Xl,pn,Eo,mn,Zl,Ie,Nd='<a href="#開機時自動跳出訊息">開機時自動跳出訊息</a>',Yl,j,Do,on,Ro,$n,bo,gn,No,fn,ep,Ue,Fd='<a href="#禁止使用-windows-update">禁止使用 Windows Update</a>',tp,se,Fo,ea,Od="Enabled",Oo,dn,Io,un,np,We,Id='<a href="#登入時自動將檔案複製到桌面">登入時自動將檔案複製到桌面</a>',rp,Ba,Dh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>// 將 PuTTY 複製到使用者的桌面上
copy C:putty.exe %USERPROFILE%Desktop
// %USERPROFILE% 指的是當前登入使用者的 User 目錄</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Ga,hn,Ud="寫好後將檔案另存為 cmd，可參照上面的步驟套用於 GPO",sp,Be,Wd='<a href="#用指令載入登錄檔">用指令載入登錄檔</a>',ip,ke,Uo,ta,Bd=".reg",Wo,cn,ap,Va,Rh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>reg import [reg_file].reg</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Ja,_n,Gd="另存為 cmd，一樣可以套用於 GPO",lp,Ge,Vd='<a href="#dns">DNS</a>',pp,Ve,Jd='<a href="#dns-快取紀錄關閉">DNS 快取紀錄關閉</a>',mp,vn,jd=`按一下 Windows Key + R，輸入 regedit 後 Enter
設定「<strong>HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Dnscache</strong>」中的 <strong>Start</strong> 值為 4，重啟後即可關閉 DNS 快取紀錄`,op,Je,qd='<a href="#dns-同步">DNS 同步</a>',$p,ja,bh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF"><div class='code-container'><code><div class='line'><span style="color: undefined">DC：192.168.39.10 (Primary DNS)</span></div><div class='line'><span style="color: undefined">SRV：192.168.39.20 (Secondary DNS)</span></div></code></div></pre>`,qa,Y,Bo,Cn,Go,wn,Vo,Sn,Jo,gp,kn,Kd="若要設定自動同步項可以看下方的 SOA",fp,je,zd='<a href="#通知-notify">通知 (Notify)</a>',dp,Pe,jo,Pn,qo,Hn,up,qe,Qd='<a href="#start-of-authority-record-soa">Start of Authority Record (SOA)</a>',hp,Tn,xn,Ko,cp,Ke,Xd='<a href="#conditional-forwarders">Conditional Forwarders</a>',_p,fe,zo,yn,Qo,Mn,Xo,vp,Ka,Nh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF"><div class='code-container'><code><div class='line'><span style="color: undefined">本地 DNS：wsc2024.tw / 172.16.20.10</span></div><div class='line'><span style="color: undefined">遠端 DNS：worldskills.org / 8.8.8.8</span></div></code></div></pre>`,za,ze,An,Zo,Ln,Cp,Qe,Zd='<a href="#使用者設定-cmd--for-loop">使用者設定 (cmd &amp; for loop)</a>',wp,Qa,Fh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>//加入九個使用者，名稱為 IT01~IT09
for /l %a in (1 1 9) do net user IT0%a /add
//加入九個使用者，名稱為 HQ01~HQ09，密碼為 Skills39
for /l %a in (1 1 9) do net user HQ0%a Skills39 /add
//刪除使用者
net user [username] /del</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Xa,Xe,Yd='<a href="#進階使用者設定-powershell--for-loop">進階使用者設定 (PowerShell &amp; for loop)</a>',Sp,Ze,eu='<a href="#set-aduser">Set-ADUser</a>',kp,En,tu="通常是使用者的細項資料設定才會用到",Pp,Za,Oh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>//將 FA001~009 九個使用者的 Display Name 設定為 Flight Attendant 001~009
1..9 | % &#123; Set-ADUser -Identity FA00$_ -DisplayName "Flight Attendant 00$_" &#125;
// "$_" 是一個特殊的 PowerShell 自動變數，代表執行中的腳本或指令所傳遞過來的變數</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Ya,na,Dn,Hp,Rn,Yo,bn,Tp,Ye,nu='<a href="#dsmod">dsmod</a>',xp,Nn,ru=`dsmod 與 Set-ADUser 的功能相同
先使用 <code>dsquery</code> 指令列出所有的完整使用者名稱 (包含所屬網域等參數)，在使用 <code>dsmod</code> 指令時需要`,yp,el,Ih=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>dsquery user
// 列出所有使用者完整名稱</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,tl,ra,Fn,Mp,nl,Uh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>dsmod user /?
// 可查看所有 dsmod 可修改的參數及表示方式</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,rl,sl,Wh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>dsmod user [full_user_name] -office "IT Manager"
// 將使用者的 Office 參數改為 IT Manager</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,il,et,On,e$,In,Ap,tt,su='<a href="#群組設定-cmd--for-loop">群組設定 (cmd &amp; for loop)</a>',Lp,Un,iu="通常僅會在 Windows Server 題目中沒有要求做 Active Directory 時才會用到",Ep,al,Bh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>//新增群組
net localgroup [groupname] /add
//將 IT01~09 共九人加入 IT 群組
for /l %a in (1 1 9) do net localgroup IT IT0%a /add
//將使用者移出群組
net localgroup [groupname] [username] /del
//重新命名群組
wmic group where name="[oldname]" rename [newname]
//檢查群組內的使用者
net localgroup [groupname]</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,ll,Wn,au='PS：若群組名稱或使用者名稱有空格，需要用雙引號("")括起來',Dp,nt,lu='<a href="#一次允許多個可使用遠端桌面的使用者">一次允許多個可使用遠端桌面的使用者</a>',Rp,pl,Gh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>//將 IT01~09 共九人允許使用遠端桌面連線
for /l %a in (1 1 9) do net localgroup "Remote Desktop Users" IT0%a /add</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,ml,rt,pu='<a href="#允許-icmp-協議">允許 ICMP 協議</a>',bp,y,t$,Bn,n$,Gn,r$,Vn,s$,Jn,i$,jn,a$,qn,l$,Kn,p$,zn,m$,Qn,o$,Xn,Np,st,mu='<a href="#讓網域內電腦自動信任-ca-憑證">讓網域內電腦自動信任 CA 憑證</a>',Fp,it,ou='<a href="#允許自動信任設定">允許自動信任設定</a>',Op,ie,$$,Zn,g$,sa,$u="Enabled",f$,Yn,Ip,at,gu='<a href="#設定自動信任的電腦">設定自動信任的電腦</a>',Up,F,d$,er,u$,tr,h$,nr,c$,rr,_$,ia,fu="gpupdate /force",v$,sr,Wp,lt,du='<a href="#共享資料夾管理-file-server-resource-manager">共享資料夾管理 (File Server Resource Manager)</a>',Bp,ir,C$,ar,Gp,pt,uu='<a href="#限制共享資料夾空間">限制共享資料夾空間</a>',Vp,ae,w$,lr,S$,pr,k$,mr,Jp,mt,hu='<a href="#限制共享資料夾存放檔案類型">限制共享資料夾存放檔案類型</a>',jp,ee,aa,cu="Step 1. 建立檔案類型群組",P$,or,H$,$r,T$,gr,qp,B,la,_u="Step 2. 建立禁止檔案類型範本",x$,fr,y$,dr,M$,pa,vu="若顯示錯誤，將虛擬機重開就可解決",A$,ur,Kp,te,ma,Cu="Step 3. 套用範本到共享資料夾",L$,hr,E$,cr,D$,_r,zp,ot,wu='<a href="#快速啟動網路介面控制">快速啟動網路介面控制</a>',Qp,He,R$,vr,b$,Cr,Xp,$t,Su='<a href="#更改-remote-desktop-的-tcp-port-登錄檔修改">更改 Remote Desktop 的 TCP Port (登錄檔修改)</a>',Zp,le,N$,oa,ku="HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp",F$,$a,Pu="PortNumber",O$,wr,Yp,gt,Hu='<a href="#dhcp-server-位址保留">DHCP Server 位址保留</a>',em,q,I$,Sr,U$,kr,W$,ga,Tu="ipconfig /renew",B$,Pr,tm,ft,xu='<a href="#vpn-設定">VPN 設定</a>',nm,w,G$,Hr,V$,Tr,J$,xr,j$,yr,q$,Mr,K$,Ar,z$,Lr,Q$,Er,X$,Dr,Z$,Rr,Y$,br,eg,Nr,tg,Fr,ng,Or,rg,Ir,sg,Ur,ig,Wr,rm,dt,yu='<a href="#sstp-設定">SSTP 設定</a>',sm,ut,Mu='<a href="#有-web-server--https">有 Web Server + HTTPS</a>',im,K,ag,Br,lg,Gr,pg,Vr,mg,Jr,am,ol,Vh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF"><div class='code-container'><code><div class='line'><span style="color: undefined">先設定 CA Server 的 Certificate Templates</span></div><div class='line'><span style="color: undefined">MMC -&gt; Certificate Templates -&gt; IPSec -&gt; 右鍵 Duplicate Template</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/SJ0plU-S0.png)</span></div><div class='line'><span style="color: undefined">Request Handling -&gt; 勾選 Allow private key to be exported</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/HJWMZ8bHR.png)</span></div><div class='line'><span style="color: undefined">Subject Name -&gt; 選擇 Supply in the request</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/Sy93-8-B0.png)</span></div><div class='line'><span style="color: undefined">Extensions Application -&gt; Edit...</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/rk9eGUbHR.png)</span></div><div class='line'><span style="color: undefined">Add... -&gt; Server Authentication</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/r1xVfL-rC.png)![image](https://hackmd.io/_uploads/SyD8GUWSA.png)</span></div><div class='line'><span style="color: undefined">Certificate Templates 設定完成</span></div></code></div></pre>`,$l,ht,Au='<a href="#radius-驗證伺服器">RADIUS 驗證伺服器</a>',lm,S,og,jr,$g,qr,gg,Kr,fg,zr,dg,Qr,ug,Xr,hg,Zr,cg,Yr,_g,es,vg,ts,Cg,ns,wg,rs,Sg,ss,kg,is,Pg,as,pm,ct,Lu='<a href="#讓外部電腦信任根憑證-root-ca">讓外部電腦信任根憑證 (Root CA)</a>',mm,b,Hg,ls,Tg,ps,xg,ms,yg,os,Mg,$s,Ag,gs,Lg,fs,om,_t,Eu='<a href="#windows-11">Windows 11</a>',$m,vt,Du='<a href="#安裝跳過-tpmcpu-和-secure-boot-檢查">安裝跳過 TPM、CPU 和 Secure Boot 檢查</a>',gm,P,ds,Eg,us,Dg,fa,Ru="Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\Setup",Rg,hs,bg,cs,Ng,da,bu="BypassTPMCheck",Fg,ua,Nu="BypassSecureBootCheck",Og,ha,Fu="BypassCPUCheck",Ig,ca,Ou="BypassRAMCheck",Ug,_s,Wg,vs,Bg,Cs,Gg,ws,Vg,Ss,fm,Ct,Iu='<a href="#organizational-unit-ou">Organizational Unit (OU)</a>',dm,wt,Uu='<a href="#新增">新增</a>',um,ks,Jg,Ps,hm,St,Wu='<a href="#刪除">刪除</a>',cm,G,jg,Hs,qg,Ts,Kg,xs,zg,ys,Qg,_m,kt,Bu='<a href="#當-iis-有使用到網路資源的設定">當 IIS 有使用到網路資源的設定</a>',vm,Te,Xg,Ms,Zg,As,Cm,Pt,Gu='<a href="#edge-group-policy-templates-admx-54-分區可能出">Edge Group Policy Templates ADMX (54 分區可能出)</a>',wm,Ht,Vu='<a href="#安裝">安裝</a>',Sm,O,Yg,_a,Ju="MicrosoftEdgePolicyTemplates\\windows\\admx",ef,va,ju="C:\\Windows\\PolicyDefinitions",tf,Ls,nf,Es,rf,Ca,qu="C:\\Windows\\PolicyDefinitions\\en-US",sf,Ds,km,Tt,Ku='<a href="#套用更新">套用更新</a>',Pm,V,af,wa,zu="gpupdate /force",lf,Sa,Qu="gpedit.msc",pf,Rs,mf,bs,of,Hm,xt,Xu='<a href="#封鎖衝浪遊戲-surf-game">封鎖衝浪遊戲 (Surf Game)</a>',Tm,yt,ka,$f,Ns,gf,Pa,ff,Fs,xm,Mt,Zu='<a href="#啟動首頁和新索引標籤頁面-startup-home-page-and-new-tab-page">啟動、首頁和新索引標籤頁面 (Startup, home page and new tab page)</a>',ym,At,Ha,df,Os,uf,Ta,hf,Is,Mm,Lt,Yu='<a href="#允許或拒絕網頁截取螢幕畫面-allow-or-deny-screen-capture">允許或拒絕網頁截取螢幕畫面 (Allow or deny screen capture)</a>',Am,xa,Us,Lm,Et,eh='<a href="#拒絕存取特定網站-block-access-to-a-list-of-urls">拒絕存取特定網站 (Block access to a list of URLs)</a>',Em,Dt,Rt,cf,Ws,_f,Bs,vf,ya,Cf,Gs,Dm,bt,th='<a href="#對單個使用者或群組做密碼限制-ad-ac">對單個使用者或群組做密碼限制 (AD AC)</a>',Rm,Vs,wf,Js,bm,gl,Jh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF"><div class='code-container'><code><div class='line'><span style="color: undefined">創立一個至少需要輸入 8 個字的密碼規則</span></div></code></div></pre>`,fl,D,js,Sf,qs,kf,Ks,Pf,zs,Hf,Qs,Tf,Xs,xf,Zs,yf,Ys,Nm,Nt,nh='<a href="#遠端桌面服務-remote-desktop-service">遠端桌面服務 (Remote Desktop Service)</a>',Fm,L,Mf,ei,Af,ti,Lf,ni,Ef,ri,Df,si,Rf,ii,bf,ai,Nf,li,Om,Ft,rh='<a href="#啟用-ip-forwarding-regedit">啟用 IP Forwarding (Regedit)</a>',Im,xe,Ff,Ma,sh="Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\IPEnableRouter",Of,pi,Um,Ot,ih='<a href="#啟用-ntp-server-windows-server">啟用 NTP Server (Windows Server)</a>',Wm,mi,ah="修改登錄檔，以下設定都是在目錄：「<strong>HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\W32Time</strong>」做設定，故只補充其後段的位置",Bm,oi,lh=`<li>設定為 NTP Server：<strong>「\\Parameters\\Type」</strong> 更改為 “NTP”</li> <li>啟動 NTP Server：「<strong>\\TimeProviders\\NtpServer\\Enabled</strong>」 更改為 “1”</li> <li>設定時間修正：「<strong>\\Config\\MaxPosPhaseCorrection</strong> 和 <strong>\\Config\\MaxNegPhaseCorrection</strong>」更改數值為 “1800” (十進位)
用 cmd 重啟 Windows Time Service</li>`,Gm,dl,jh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>開啟 cmd.exe
net stop w32time (停止 Service)
net start w32time (啟用 Service)</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,ul,It,ph='<a href="#次級憑證的簽證及安裝-sub-ca">次級憑證的簽證及安裝 (Sub CA)</a>',Vm,pe,If,$i,Uf,gi,Wf,fi,Jm,ye,Bf,di,Gf,ui,jm,me,Vf,hi,Jf,ci,jf,_i,qm,de,qf,vi,Kf,Ci,zf,Km,Ut,mh='<a href="#error-the-revocation-function-was-unable-to-check-revocation-because-the-revocation-server-was-offline">error: The revocation function was unable to check revocation because the revocation server was offline</a>',zm,ue,wi,Qf,Aa,oh="ipconfig /flushdns",Xf,Si,Qm,ki,$h="若錯誤還在，也可透過 PowerShell 指令直接停用 CRL 檢查及下載",Xm,hl,qh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>certutil -setreg caCRLFlags +CRLF_REVCHECK_IGNORE_OFFLINE</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,cl,Wt,gh='<a href="#透過-powershell-建立-raid">透過 PowerShell 建立 RAID</a>',Zm,Bt,fh='<a href="#建立-storage-pool">建立 Storage Pool</a>',Ym,Pi,Zf,Hi,eo,Gt,dh='<a href="#建立-raid-磁區">建立 RAID 磁區</a>',to,La,Ti,no,_l,Kh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>// 假設已建立好 Storage Pool "SRVDisk" (上圖)
// 新增三個磁碟，將其設為其中一個磁碟損壞後仍可持續運作的模式，並以 40GB 左右的空間提供於 E:/
PowerShell 指令：
New-VirtualDisk -StoragePoolFriendlyName SRVDisk -FriendlyName SRVDisk -Size 40GB -ResiliencySettingName "Parity"</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,vl,Cl,zh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF"><div class='code-container'><code><div class='line'><span style="color: undefined">ResiliencySettingName 參數解釋：</span></div><div class='line'><span style="color: undefined">Simple：依建立的磁碟大小，就佔多大的空間，相當於RAID 0</span></div><div class='line'><span style="color: undefined">Mirror：同時寫入多份，增加資料的可用性但減少空間，相當於RAID 1</span></div><div class='line'><span style="color: undefined">Parity：利用位元檢查將資料儲存至各個磁碟上，至少需要三顆以上的磁碟，就算有其中一顆硬碟故障也可正常運作，相當於RAID 5</span></div></code></div></pre>`,wl,N,Yf,xi,ed,yi,Mi,td,Ai,nd,Li,rd,Ei,sd,Di,ro,Vt,uh='<a href="#啟用重複資料刪除機制">啟用重複資料刪除機制</a>',so,ne,id,Ri,ad,bi,ld,Ni,pd,io,Jt,hh='<a href="#ad-users-csv-import--export">AD Users CSV Import / Export</a>',ao,jt,ch='<a href="#csvde-import-無法使用">csvde (Import 無法使用？)</a>',lo,Fi,_h="Import",po,Sl,Qh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>csvde -i -k -f [csv_file_path]</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,kl,Oi,vh="Export",mo,Pl,Xh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>csvde -r "(objectClass=user)" -m -f [csv_file_path_for_export]</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Hl,Ea,Ii,oo,qt,Ch='<a href="#powershell-import-users">Powershell Import Users</a>',$o,Ui,wh="使用 <code>Import-CSV</code> 和 <code>ForEach-Object</code> 完成",go,Tl,Zh=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>Import-Csv -Path [csv_path] | ForEach-Object &#123; 
	$user = $_
	net group $user.group /add
	net user $user.name $user.pass /add
	net group $user.group $user.name /add
&#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,xl,Da,Wi,fo;return Zt=new f({props:{src:"https://hackmd.io/_uploads/HJi2R6hqh.png",alt:"image"}}),Yt=new f({props:{src:"https://hackmd.io/_uploads/Sy5jSED03.png"}}),en=new f({props:{src:"https://hackmd.io/_uploads/HkgS8Vw02.png"}}),tn=new f({props:{src:"https://hackmd.io/_uploads/rkMTCT2q2.png"}}),rn=new f({props:{src:"https://hackmd.io/_uploads/rkd1JRhq2.png"}}),sn=new f({props:{src:"https://hackmd.io/_uploads/ryScekxjp.png",alt:"image"}}),ln=new f({props:{src:"https://hackmd.io/_uploads/rynWy0n92.png"}}),mn=new f({props:{src:"https://hackmd.io/_uploads/SJMjm3FRT.png",alt:"image"}}),on=new f({props:{src:"https://hackmd.io/_uploads/r15ckli0T.png",alt:"image"}}),$n=new f({props:{src:"https://hackmd.io/_uploads/SyCi61j0T.png",alt:"image"}}),gn=new f({props:{src:"https://hackmd.io/_uploads/H1zjyeiRa.png",alt:"image"}}),fn=new f({props:{src:"https://hackmd.io/_uploads/S1MRyejRp.png",alt:"image"}}),dn=new f({props:{src:"https://hackmd.io/_uploads/BJ7flZjC6.png",alt:"image"}}),un=new f({props:{src:"https://hackmd.io/_uploads/SJl3gGbsR6.png",alt:"image"}}),cn=new f({props:{src:"https://hackmd.io/_uploads/H1HquOl1C.png",alt:"image"}}),Cn=new f({props:{src:"https://hackmd.io/_uploads/r1KPerlC6.png",alt:"image"}}),wn=new f({props:{src:"https://hackmd.io/_uploads/SyOQWHgRp.png",alt:"image"}}),Sn=new f({props:{src:"https://hackmd.io/_uploads/r1rqWSgRp.png",alt:"image"}}),Pn=new f({props:{src:"https://hackmd.io/_uploads/SJ3xUBlAT.png",alt:"image"}}),Hn=new f({props:{src:"https://hackmd.io/_uploads/B10Uvrg0p.png",alt:"image"}}),xn=new f({props:{src:"https://hackmd.io/_uploads/rkkD_HxAT.png",alt:"image"}}),yn=new f({props:{src:"https://hackmd.io/_uploads/S13rUWy_A.png",alt:"image"}}),Mn=new f({props:{src:"https://hackmd.io/_uploads/rJTtLWJu0.png",alt:"image"}}),An=new f({props:{src:"https://hackmd.io/_uploads/ByeFwZkO0.png",alt:"image"}}),Ln=new f({props:{src:"https://hackmd.io/_uploads/B1uqDZkuA.png",alt:"image"}}),Dn=new f({props:{src:"https://hackmd.io/_uploads/By0zKd-NA.png",alt:"image"}}),bn=new f({props:{src:"https://hackmd.io/_uploads/HyFtKuZEA.png",alt:"image"}}),Fn=new f({props:{src:"https://hackmd.io/_uploads/ryT_7DHO0.png",alt:"image"}}),On=new f({props:{src:"https://hackmd.io/_uploads/Sy5WNDrO0.png",alt:"image"}}),In=new f({props:{src:"https://hackmd.io/_uploads/BkozEwHOA.png",alt:"image"}}),Bn=new f({props:{src:"https://hackmd.io/_uploads/r1s-A6n5n.png"}}),Gn=new f({props:{src:"https://hackmd.io/_uploads/HJnfR63qh.png"}}),Vn=new f({props:{src:"https://hackmd.io/_uploads/HyVQAa252.png"}}),Jn=new f({props:{src:"https://hackmd.io/_uploads/S1hQ0ph92.png"}}),jn=new f({props:{src:"https://hackmd.io/_uploads/SyQE0a352.png"}}),qn=new f({props:{src:"https://hackmd.io/_uploads/By64063q3.png"}}),Kn=new f({props:{src:"https://hackmd.io/_uploads/B1SBAah9n.png"}}),zn=new f({props:{src:"https://hackmd.io/_uploads/BkvUATnch.png"}}),Qn=new f({props:{src:"https://hackmd.io/_uploads/S1zwC6nqn.png"}}),Xn=new f({props:{src:"https://hackmd.io/_uploads/SkSuCT3c2.png"}}),Zn=new f({props:{src:"https://hackmd.io/_uploads/HkxKAa2cn.png"}}),Yn=new f({props:{src:"https://hackmd.io/_uploads/SJcKApn93.png"}}),er=new f({props:{src:"https://hackmd.io/_uploads/BylcRah93.png"}}),tr=new f({props:{src:"https://hackmd.io/_uploads/BJ550p35h.png"}}),nr=new f({props:{src:"https://hackmd.io/_uploads/H1LoC625n.png"}}),rr=new f({props:{src:"https://hackmd.io/_uploads/r1b2R6hq3.png"}}),sr=new f({props:{src:"https://hackmd.io/_uploads/Hkh16KO2h.png"}}),ar=new f({props:{src:"https://hackmd.io/_uploads/HJn7SZjnp.png",alt:"image"}}),lr=new f({props:{src:"https://hackmd.io/_uploads/BkJdH-snp.png",alt:"image"}}),pr=new f({props:{src:"https://hackmd.io/_uploads/ByeZkR2c2.png",alt:"image"}}),mr=new f({props:{src:"https://hackmd.io/_uploads/HkiIUbihp.png",alt:"image"}}),or=new f({props:{src:"https://hackmd.io/_uploads/B1sspZo3a.png",alt:"image"}}),$r=new f({props:{src:"https://hackmd.io/_uploads/HJUj0Wsn6.png",alt:"image"}}),gr=new f({props:{src:"https://hackmd.io/_uploads/H1KZRZohT.png",alt:"image"}}),fr=new f({props:{src:"https://hackmd.io/_uploads/S1K2hWona.png",alt:"image"}}),dr=new f({props:{src:"https://hackmd.io/_uploads/B1Eiyfona.png",alt:"image"}}),ur=new f({props:{src:"https://hackmd.io/_uploads/ByN_pbs3T.png",alt:"image"}}),hr=new f({props:{src:"https://hackmd.io/_uploads/rk0p_-j2a.png",alt:"image"}}),cr=new f({props:{src:"https://hackmd.io/_uploads/SklXxzj36.png",alt:"image"}}),_r=new f({props:{src:"https://hackmd.io/_uploads/SJGceMoha.png",alt:"image"}}),vr=new f({props:{src:"https://hackmd.io/_uploads/HkXDvaLL2.png"}}),Cr=new f({props:{src:"https://hackmd.io/_uploads/Hkd38pU8n.png"}}),wr=new f({props:{src:"https://hackmd.io/_uploads/HJckBqzF3.png"}}),Sr=new f({props:{src:"https://hackmd.io/_uploads/S1EOa9qtn.png"}}),kr=new f({props:{src:"https://hackmd.io/_uploads/H1BNR9qtn.png"}}),Pr=new f({props:{src:"https://hackmd.io/_uploads/B1yiJi9Y3.png"}}),Hr=new f({props:{src:"https://hackmd.io/_uploads/BkaBU3Ps3.png"}}),Tr=new f({props:{src:"https://hackmd.io/_uploads/Sk6283Doh.png"}}),xr=new f({props:{src:"https://hackmd.io/_uploads/r1CKRvn32.png"}}),yr=new f({props:{src:"https://hackmd.io/_uploads/Hk4b1u32n.png"}}),Mr=new f({props:{src:"https://hackmd.io/_uploads/HJKFkO333.png"}}),Ar=new f({props:{src:"https://hackmd.io/_uploads/rymwDnwih.png"}}),Lr=new f({props:{src:"https://hackmd.io/_uploads/SkhOg5_32.png"}}),Er=new f({props:{src:"https://hackmd.io/_uploads/HJJcG9dnh.png"}}),Dr=new f({props:{src:"https://hackmd.io/_uploads/HJEpX5uhn.png"}}),Rr=new f({props:{src:"https://hackmd.io/_uploads/Hki8Ncu2h.png"}}),br=new f({props:{src:"https://hackmd.io/_uploads/BJDHD_323.png"}}),Nr=new f({props:{src:"https://hackmd.io/_uploads/rJ3fu_nh2.png"}}),Fr=new f({props:{src:"https://hackmd.io/_uploads/rJlxvs2nh.png"}}),Or=new f({props:{src:"https://hackmd.io/_uploads/H1oKHvx1a.png"}}),Ir=new f({props:{src:"https://hackmd.io/_uploads/HJodMwxJa.png"}}),Ur=new f({props:{src:"https://hackmd.io/_uploads/SJxzrwx16.png"}}),Wr=new f({props:{src:"https://hackmd.io/_uploads/SJ-HIvlyT.png"}}),Br=new f({props:{src:"https://hackmd.io/_uploads/r1wZT0kD0.png",alt:"image"}}),Gr=new f({props:{src:"https://hackmd.io/_uploads/HyV4fJew0.png",alt:"image"}}),Vr=new f({props:{src:"https://hackmd.io/_uploads/HyQXZyxDA.png",alt:"image"}}),Jr=new f({props:{src:"https://hackmd.io/_uploads/B1f0jJlwR.png",alt:"image"}}),jr=new f({props:{src:"https://hackmd.io/_uploads/HyZMWglPC.png",alt:"image"}}),qr=new f({props:{src:"https://hackmd.io/_uploads/HyF2QegvC.png",alt:"image"}}),Kr=new f({props:{src:"https://hackmd.io/_uploads/BkC-4xlDR.png",alt:"image"}}),zr=new f({props:{src:"https://hackmd.io/_uploads/BkzfBgxw0.png",alt:"image"}}),Qr=new f({props:{src:"https://hackmd.io/_uploads/HyAozexDR.png",alt:"image"}}),Xr=new f({props:{src:"https://hackmd.io/_uploads/ByKLSlew0.png",alt:"image"}}),Zr=new f({props:{src:"https://hackmd.io/_uploads/BJYGUeewC.png",alt:"image"}}),Yr=new f({props:{src:"https://hackmd.io/_uploads/SyIsLgeDR.png",alt:"image"}}),es=new f({props:{src:"https://hackmd.io/_uploads/SygknxeDA.png",alt:"image"}}),ts=new f({props:{src:"https://hackmd.io/_uploads/HJCGhelDR.png",alt:"image"}}),ns=new f({props:{src:"https://hackmd.io/_uploads/rywFnlgv0.png",alt:"image"}}),rs=new f({props:{src:"https://hackmd.io/_uploads/SkbAvQevC.png",alt:"image"}}),ss=new f({props:{src:"https://hackmd.io/_uploads/HkweuXeDA.png",alt:"image"}}),is=new f({props:{src:"https://hackmd.io/_uploads/BJqCdXewR.png",alt:"image"}}),as=new f({props:{src:"https://hackmd.io/_uploads/S10qtQlwA.png",alt:"image"}}),ls=new f({props:{src:"https://hackmd.io/_uploads/SyfBYQ8Rh.png"}}),ps=new f({props:{src:"https://hackmd.io/_uploads/rkuU5QUC2.png"}}),ms=new f({props:{src:"https://hackmd.io/_uploads/H1wKc78R2.png"}}),os=new f({props:{src:"https://hackmd.io/_uploads/H1Ppi7LR2.png"}}),$s=new f({props:{src:"https://hackmd.io/_uploads/SkJYhXIC3.png"}}),gs=new f({props:{src:"https://hackmd.io/_uploads/B1Bq2XLRh.png"}}),fs=new f({props:{src:"https://hackmd.io/_uploads/Skbb6Q8C2.png"}}),ds=new f({props:{src:"https://hackmd.io/_uploads/HkhM2Fdh3.png"}}),us=new f({props:{src:"https://hackmd.io/_uploads/HJmEkuJn3.png"}}),hs=new f({props:{src:"https://hackmd.io/_uploads/H1pi0Dknh.png"}}),cs=new f({props:{src:"https://hackmd.io/_uploads/S1pkxdknn.png"}}),_s=new f({props:{src:"https://hackmd.io/_uploads/H1wN_tOhn.png"}}),vs=new f({props:{src:"https://hackmd.io/_uploads/HkbSOFd32.png"}}),Cs=new f({props:{src:"https://hackmd.io/_uploads/SyLSOt_h2.png"}}),ws=new f({props:{src:"https://hackmd.io/_uploads/rJgjotu2n.png"}}),Ss=new f({props:{src:"https://hackmd.io/_uploads/BJ813FOn2.png"}}),Ps=new f({props:{src:"https://hackmd.io/_uploads/SkxfW-zTp.png",alt:"image"}}),Hs=new f({props:{src:"https://hackmd.io/_uploads/ryr1XZf6p.png",alt:"image"}}),Ts=new f({props:{src:"https://hackmd.io/_uploads/BkzAzbM6a.png",alt:"image"}}),xs=new f({props:{src:"https://hackmd.io/_uploads/r1IKmWzaT.png",alt:"image"}}),ys=new f({props:{src:"https://hackmd.io/_uploads/BkxgubGTp.png",alt:"image"}}),Ms=new f({props:{src:"https://hackmd.io/_uploads/B1Wh72pap.png",alt:"image"}}),As=new f({props:{src:"https://hackmd.io/_uploads/r1uPE2aTT.png",alt:"image"}}),Ls=new f({props:{src:"https://hackmd.io/_uploads/B1csbpDCp.png",alt:"image"}}),Es=new f({props:{src:"https://hackmd.io/_uploads/Skawzaw0p.png",alt:"image"}}),Ds=new f({props:{src:"https://hackmd.io/_uploads/r1Jd7TPA6.png",alt:"image"}}),Rs=new f({props:{src:"https://hackmd.io/_uploads/BkqvHaPCp.png",alt:"image"}}),bs=new f({props:{src:"https://hackmd.io/_uploads/rkxxC0DAp.png",alt:"image"}}),Ns=new f({props:{src:"https://hackmd.io/_uploads/B1V1cL_Ra.png",alt:"image"}}),Fs=new f({props:{src:"https://hackmd.io/_uploads/Hy1cq8_CT.png",alt:"image"}}),Os=new f({props:{src:"https://hackmd.io/_uploads/Bk-TBU_AT.png",alt:"image"}}),Is=new f({props:{src:"https://hackmd.io/_uploads/HkihDUOCa.png",alt:"image"}}),Us=new f({props:{src:"https://hackmd.io/_uploads/HymET8dRa.png",alt:"image"}}),Ws=new f({props:{src:"https://hackmd.io/_uploads/BkfMyvuAa.png",alt:"image"}}),Bs=new f({props:{src:"https://hackmd.io/_uploads/SJ1VyPdAT.png",alt:"image"}}),Gs=new f({props:{src:"https://hackmd.io/_uploads/rk8U1w_Ca.png",alt:"image"}}),Js=new f({props:{src:"https://hackmd.io/_uploads/BJLgKWKCp.png",alt:"image"}}),js=new f({props:{src:"https://hackmd.io/_uploads/H1YC5bFCp.png",alt:"image"}}),qs=new f({props:{src:"https://hackmd.io/_uploads/Hy1D2-YAp.png",alt:"image"}}),Ks=new f({props:{src:"https://hackmd.io/_uploads/BkfepWtAa.png",alt:"image"}}),zs=new f({props:{src:"https://hackmd.io/_uploads/B1ZXTZKCp.png",alt:"image"}}),Qs=new f({props:{src:"https://hackmd.io/_uploads/SJFSAZtC6.png",alt:"image"}}),Xs=new f({props:{src:"https://hackmd.io/_uploads/rkKDRWtAT.png",alt:"image"}}),Zs=new f({props:{src:"https://hackmd.io/_uploads/HkeiRbt0p.png",alt:"image"}}),Ys=new f({props:{src:"https://hackmd.io/_uploads/B1kp0-YRa.png",alt:"image"}}),ei=new f({props:{src:"https://hackmd.io/_uploads/HJLDgliR6.png",alt:"image"}}),ti=new f({props:{src:"https://hackmd.io/_uploads/ry_igeiCT.png",alt:"image"}}),ni=new f({props:{src:"https://hackmd.io/_uploads/ryc6xgjC6.png",alt:"image"}}),ri=new f({props:{src:"https://hackmd.io/_uploads/SkJB4giRp.png",alt:"image"}}),si=new f({props:{src:"https://hackmd.io/_uploads/HktnHxsCp.png",alt:"image"}}),ii=new f({props:{src:"https://hackmd.io/_uploads/BJqYNxo0T.png",alt:"image"}}),ai=new f({props:{src:"https://hackmd.io/_uploads/SJah4gjRp.png",alt:"image"}}),li=new f({props:{src:"https://hackmd.io/_uploads/HkzMwxsR6.png",alt:"image"}}),pi=new f({props:{src:"https://hackmd.io/_uploads/SJNNwq0AT.png",alt:"image"}}),$i=new f({props:{src:"https://hackmd.io/_uploads/Sk4pHiuX0.png",alt:"image"}}),gi=new f({props:{src:"https://hackmd.io/_uploads/SJFFvsdXR.png",alt:"image"}}),fi=new f({props:{src:"https://hackmd.io/_uploads/ByfCDiOQA.png",alt:"image"}}),di=new f({props:{src:"https://hackmd.io/_uploads/rJWrKiumR.png",alt:"image"}}),ui=new f({props:{src:"https://hackmd.io/_uploads/rylCtidQR.png",alt:"image"}}),hi=new f({props:{src:"https://hackmd.io/_uploads/SyRN5i_mR.png",alt:"image"}}),ci=new f({props:{src:"https://hackmd.io/_uploads/Sydp9s_QR.png",alt:"image"}}),_i=new f({props:{src:"https://hackmd.io/_uploads/rJfVojOQC.png",alt:"image"}}),vi=new f({props:{src:"https://hackmd.io/_uploads/HyXAijdm0.png",alt:"image"}}),Ci=new f({props:{src:"https://hackmd.io/_uploads/ByrOnjOXR.png",alt:"image"}}),wi=new f({props:{src:"https://learn-attachment.microsoft.com/api/attachments/7a610d77-a91c-4fdd-b852-8997ea966c54?platform=QnA",alt:"image"}}),Si=new f({props:{src:"https://hackmd.io/_uploads/By5GaH-rR.png",alt:"image"}}),Hi=new f({props:{src:"https://hackmd.io/_uploads/ryntCEjXC.png",alt:"image"}}),Ti=new f({props:{src:"https://hackmd.io/_uploads/H14eRVjXA.png",alt:"image"}}),xi=new f({props:{src:"https://hackmd.io/_uploads/Bk_3kBjQ0.png",alt:"image"}}),yi=new f({props:{src:"https://hackmd.io/_uploads/HkjubHj70.png",alt:"image"}}),Mi=new f({props:{src:"https://hackmd.io/_uploads/S1vxMrsm0.png",alt:"image"}}),Ai=new f({props:{src:"https://hackmd.io/_uploads/B1Wx7SjmR.png",alt:"image"}}),Li=new f({props:{src:"https://hackmd.io/_uploads/rJe8QriQR.png",alt:"image"}}),Ei=new f({props:{src:"https://hackmd.io/_uploads/r1H2mSi70.png",alt:"image"}}),Di=new f({props:{src:"https://hackmd.io/_uploads/B1lRQHiXC.png",alt:"image"}}),Ri=new f({props:{src:"https://hackmd.io/_uploads/By1ZBcbBR.png",alt:"image"}}),bi=new f({props:{src:"https://hackmd.io/_uploads/ry5xLqZr0.png",alt:"image"}}),Ni=new f({props:{src:"https://hackmd.io/_uploads/Sy92U5-HA.png",alt:"image"}}),Ii=new f({props:{src:"https://hackmd.io/_uploads/HyItOk1dC.png",alt:"image"}}),Wi=new f({props:{src:"https://hackmd.io/_uploads/BJ2Tdz4_0.png",alt:"image"}}),{c(){x=d("h2"),x.innerHTML=ve,oe=i(),X=d("h3"),X.innerHTML=R,Z=i(),$e=d("p"),$e.innerHTML=Sd,Fl=i(),Ee=d("h3"),Ee.innerHTML=kd,Ol=i(),Ce=d("p"),Co=h("GPO -> User Configuration -> Policies -> Administrative Templetes -> Control Panel -> 設定 Prohibit access to Control Panel and PC settings 為 "),Qi=d("strong"),Qi.textContent=Pd,wo=i(),l(Zt.$$.fragment),Il=i(),De=d("h3"),De.innerHTML=Hd,Ul=i(),re=d("p"),So=h(`GPO -> User Configuration -> Administrative Templetes -> System -> 設定 Don’t run specified Windows applications
`),l(Yt.$$.fragment),ko=h(`
設定為 `),Xi=d("strong"),Xi.textContent=Td,Po=h(`，並點選 List of disallowed applications，在 Value 欄位設定要禁用的應用程式
`),l(en.$$.fragment),Wl=i(),Re=d("h3"),Re.innerHTML=xd,Bl=i(),we=d("p"),Ho=h("GPO -> Computer Configuration -> Policies -> Administrative Templetes -> System -> Logon -> 設定 Block user from showing account details on sign-in 為 "),Zi=d("strong"),Zi.textContent=yd,To=i(),l(tn.$$.fragment),Gl=i(),be=d("h3"),be.innerHTML=Md,Vl=i(),nn=d("p"),nn.textContent=Ad,Jl=i(),Oa=new M(!1),Ia=i(),ge=d("p"),xo=h(`Step 2. 用 GPO 設定讓此指令在登入時自動執行
新增 GPO -> User Configuration -> Policies -> Windows Settings -> Script (Logon/Logoff) -> Logon -> Add -> Browse -> 將 Script 丟至彈出的資料夾 -> 選擇後點選 OK
`),l(rn.$$.fragment),yo=i(),l(sn.$$.fragment),Mo=h(`
註：最好放在下面「Show Files…」的資料夾內，否則有機率腳本會無法生效`),jl=i(),Ne=d("h3"),Ne.innerHTML=Ld,ql=i(),an=d("p"),an.textContent=Ed,Kl=i(),Ua=new M(!1),Wa=i(),Fe=d("h3"),Fe.innerHTML=Dd,zl=i(),Se=d("p"),Ao=h("Local GPO -> Computer Configuration -> Administrative Templates -> Network -> Lanman Workstation -> 設定 Enable insecure guest logons 為 "),Yi=d("strong"),Yi.textContent=Rd,Lo=i(),l(ln.$$.fragment),Ql=i(),Oe=d("h3"),Oe.innerHTML=bd,Xl=i(),pn=d("p"),Eo=h(`若要指定特別使用者套用 Group Policy (刪除 Authentication Users)，至少要保留一台 Computer (最好是 Server 和 Client 都保留)
`),l(mn.$$.fragment),Zl=i(),Ie=d("h3"),Ie.innerHTML=Nd,Yl=i(),j=d("p"),Do=h(`GPO -> Computer Configuration -> Windows Settings -> Security Settings -> Local Policy -> Security Options
`),l(on.$$.fragment),Ro=i(),l($n.$$.fragment),bo=i(),l(gn.$$.fragment),No=h(`
當電腦準備登入時會顯示：
`),l(fn.$$.fragment),ep=i(),Ue=d("h3"),Ue.innerHTML=Fd,tp=i(),se=d("p"),Fo=h("GPO -> Computer Configuration -> Administrative Templates -> Windows Components -> Windows Update -> 設定 Remove access to use all Windows Update features 為 "),ea=d("strong"),ea.textContent=Od,Oo=i(),l(dn.$$.fragment),Io=h(`
效果：
`),l(un.$$.fragment),np=i(),We=d("h3"),We.innerHTML=Id,rp=i(),Ba=new M(!1),Ga=i(),hn=d("p"),hn.textContent=Ud,sp=i(),Be=d("h3"),Be.innerHTML=Wd,ip=i(),ke=d("p"),Uo=h("將登錄機碼匯出為 "),ta=d("code"),ta.textContent=Bd,Wo=h(` 格式的檔案：右鍵 -> Export -> 選擇路徑
`),l(cn.$$.fragment),ap=i(),Va=new M(!1),Ja=i(),_n=d("p"),_n.textContent=Gd,lp=i(),Ge=d("h2"),Ge.innerHTML=Vd,pp=i(),Ve=d("h3"),Ve.innerHTML=Jd,mp=i(),vn=d("p"),vn.innerHTML=jd,op=i(),Je=d("h3"),Je.innerHTML=qd,$p=i(),ja=new M(!1),qa=i(),Y=d("p"),Bo=h(`先允許 Primary DNS 跟 Secondary DNS 的 Zone Transfer 功能
DC：
`),l(Cn.$$.fragment),Go=h(`
SRV：
`),l(wn.$$.fragment),Vo=h(`
選擇域名按右鍵 -> Transfer new copy of zone from Master
`),l(Sn.$$.fragment),Jo=h(`
即可完成同步`),gp=i(),kn=d("p"),kn.textContent=Kd,fp=i(),je=d("h4"),je.innerHTML=zd,dp=i(),Pe=d("p"),jo=h(`在 Primary DNS 上設定當記錄發生變化時通知 Secondary DNS
`),l(Pn.$$.fragment),qo=h(`
設定 Secondary DNS 可以接收 Notify
`),l(Hn.$$.fragment),up=i(),qe=d("h4"),qe.innerHTML=Qd,hp=i(),Tn=d("p"),l(xn.$$.fragment),Ko=h(`
Refresh interval：Secondary DNS 多久向 Primary DNS 伺服器同步
Retry interval：當 Secondary DNS 向 Primary DNS 同步但無法連線到 Primary DNS，多久後重試
Expires after：當 Secondary DNS 無法連線到 Primary DNS 會一直重試，如果重試超過到期時間就放棄重試
Minimum TTL：當其它 DNS 伺服器查詢這個網域的記錄時，資料儲存在對方伺服器快取中的時間 (若在到期前若對方伺服器又收到相同查詢就會直接回應快取中的資料)`),cp=i(),Ke=d("h3"),Ke.innerHTML=Xd,_p=i(),fe=d("p"),zo=h(`與 Forward 功能相似，但是可以指定網域傳送到指定伺服器
`),l(yn.$$.fragment),Qo=i(),l(Mn.$$.fragment),Xo=h(`
DNS Domain：當收到這個網域的 DNS Request 時送到指定的 DNS Servers
IP addresses of the master servers：指定網域的 DNS Servers`),vp=i(),Ka=new M(!1),za=i(),ze=d("p"),l(An.$$.fragment),Zo=i(),l(Ln.$$.fragment),Cp=i(),Qe=d("h2"),Qe.innerHTML=Zd,wp=i(),Qa=new M(!1),Xa=i(),Xe=d("h2"),Xe.innerHTML=Yd,Sp=i(),Ze=d("h3"),Ze.innerHTML=eu,kp=i(),En=d("p"),En.textContent=tu,Pp=i(),Za=new M(!1),Ya=i(),na=d("p"),l(Dn.$$.fragment),Hp=i(),Rn=d("p"),Yo=h(`若忘記指令也可透過 PowerShell IDE 尋找指令
`),l(bn.$$.fragment),Tp=i(),Ye=d("h3"),Ye.innerHTML=nu,xp=i(),Nn=d("p"),Nn.innerHTML=ru,yp=i(),el=new M(!1),tl=i(),ra=d("p"),l(Fn.$$.fragment),Mp=i(),nl=new M(!1),rl=i(),sl=new M(!1),il=i(),et=d("p"),l(On.$$.fragment),e$=i(),l(In.$$.fragment),Ap=i(),tt=d("h2"),tt.innerHTML=su,Lp=i(),Un=d("p"),Un.textContent=iu,Ep=i(),al=new M(!1),ll=i(),Wn=d("p"),Wn.textContent=au,Dp=i(),nt=d("h3"),nt.innerHTML=lu,Rp=i(),pl=new M(!1),ml=i(),rt=d("h2"),rt.innerHTML=pu,bp=i(),y=d("p"),t$=h(`進入 Control Panel -> Windows Defender Firewall -> Advenced settings
`),l(Bn.$$.fragment),n$=h(`
選 Inbound rules -> New Rule
`),l(Gn.$$.fragment),r$=i(),l(Vn.$$.fragment),s$=i(),l(Jn.$$.fragment),i$=i(),l(jn.$$.fragment),a$=h(`
選擇 ICMP：
`),l(qn.$$.fragment),l$=i(),l(Kn.$$.fragment),p$=i(),l(zn.$$.fragment),m$=i(),l(Qn.$$.fragment),o$=h(`
即完成 ICMP 設定
`),l(Xn.$$.fragment),Np=i(),st=d("h2"),st.innerHTML=mu,Fp=i(),it=d("h3"),it.innerHTML=ou,Op=i(),ie=d("p"),$$=h(`打開 Group Policy Management -> Create a GPO in this domain, and Link it here
`),l(Zn.$$.fragment),g$=h(`
選擇 Computer Configuration -> Policies -> Windows Settings -> Security Settings -> Public Keys -> Certificate Services Client - Auto-Enrollmemt
設定 Configuration Model 為 `),sa=d("strong"),sa.textContent=$u,f$=i(),l(Yn.$$.fragment),Ip=i(),at=d("h3"),at.innerHTML=gu,Up=i(),F=d("p"),d$=h(`選擇 Automatic Certification Settings
右鍵 -> New -> Automatic Certificate Request
`),l(er.$$.fragment),u$=h(`
選擇 Computer
`),l(tr.$$.fragment),h$=i(),l(nr.$$.fragment),c$=i(),l(rr.$$.fragment),_$=h(`
輸入 `),ia=d("code"),ia.textContent=fu,v$=h(` 後，即完成設定
`),l(sr.$$.fragment),Wp=i(),lt=d("h2"),lt.innerHTML=du,Bp=i(),ir=d("p"),C$=h(`安裝 File Server Resource Manager
`),l(ar.$$.fragment),Gp=i(),pt=d("h3"),pt.innerHTML=uu,Vp=i(),ae=d("p"),w$=h(`選擇 Quota Management -> Quotas
`),l(lr.$$.fragment),S$=h(`
右鍵 Create Quota
`),l(pr.$$.fragment),k$=h(`
選好要套用的共享資料夾，如果在系統給的選項內沒有題目的條件就用 Custom Properties
`),l(mr.$$.fragment),Jp=i(),mt=d("h3"),mt.innerHTML=hu,jp=i(),ee=d("p"),aa=d("strong"),aa.textContent=cu,P$=h(`
選擇 File Screening Management -> File Groups
`),l(or.$$.fragment),H$=h(`
右鍵 Create File Group
`),l($r.$$.fragment),T$=h(`
將此群組包含的檔案類型都加到 Files to include 內 (註：＊.exe 代表封鎖全部附檔名為 exe 的檔案)
`),l(gr.$$.fragment),qp=i(),B=d("p"),la=d("strong"),la.textContent=_u,x$=h(`
選擇 File Screening Management -> File Screen Templates
`),l(fr.$$.fragment),y$=h(`
右鍵 Create File Screen Template
`),l(dr.$$.fragment),M$=i(),pa=d("strong"),pa.textContent=vu,A$=i(),l(ur.$$.fragment),Kp=i(),te=d("p"),ma=d("strong"),ma.textContent=Cu,L$=h(`
選擇 File Screening Management -> File Screens
`),l(hr.$$.fragment),E$=h(`
右鍵 Create File Screen
`),l(cr.$$.fragment),D$=h(`
選好要套用的共享資料夾，並將選項選到剛剛設定的範本
`),l(_r.$$.fragment),zp=i(),ot=d("h2"),ot.innerHTML=wu,Qp=i(),He=d("p"),R$=h(`按一下 Windows Key + R，輸入 ncpa.cpl 後 Enter
`),l(vr.$$.fragment),b$=h(`
可直接打開控制台網路介面
`),l(Cr.$$.fragment),Xp=i(),$t=d("h2"),$t.innerHTML=Su,Zp=i(),le=d("p"),N$=h(`按一下 Windows Key + R，輸入 regedit 後 Enter
在「`),oa=d("strong"),oa.textContent=ku,F$=h("」下，找到「"),$a=d("strong"),$a.textContent=Pu,O$=h(`」選項並編輯其機碼值為欲設定的 Port 後重啟即可
`),l(wr.$$.fragment),Yp=i(),gt=d("h2"),gt.innerHTML=Hu,em=i(),q=d("p"),I$=h(`打開 DHCP -> 選擇要設定的 Scope -> Reservations -> New Reservation
`),l(Sr.$$.fragment),U$=h(`
Reservation name (此保留設定的名稱)
IP address (欲保留的 IP 位址)
MAC address (保留的 IP 要給誰)
Description (描述此保留設定，可略過)
`),l(kr.$$.fragment),W$=h(`
設定好後，到被保留 IP 的電腦上執行 `),ga=d("code"),ga.textContent=Tu,B$=h(` (電腦網卡須設定為 DHCP)
`),l(Pr.$$.fragment),tm=i(),ft=d("h2"),ft.innerHTML=xu,nm=i(),w=d("p"),G$=h(`新增 VPN 規則，選擇 DirectAccess and VPN (RAS)
`),l(Hr.$$.fragment),V$=h(`
重啟後點選 Remote Access Management Console 後再選 RRAS Management console
`),l(Tr.$$.fragment),J$=h(`
選擇伺服器，右鍵選擇 Configure and Enable Routing and Remote Access
`),l(xr.$$.fragment),j$=h(`
選擇 Custom configuration
`),l(yr.$$.fragment),q$=h(`
選擇 VPN Access 即可
`),l(Mr.$$.fragment),K$=h(`
若無設定 DHCP：
設定 VPN 的 Static address pool，並輸入範圍可使用 VPN 的 IP 範圍
`),l(Ar.$$.fragment),z$=h(`
(若有設定 DHCP 可直接略過到下一步驟)
回到 Server Manager，選 Tools -> Active Directory Users and Computers
`),l(Lr.$$.fragment),Q$=h(`
選取想要遠端存取的使用者，並右鍵選擇「Add to a group…」
`),l(Er.$$.fragment),X$=h(`
輸入 Remote 後選擇 Check Names
`),l(Dr.$$.fragment),Z$=h(`
選擇 Remote Desktop Users 後，按 OK
`),l(Rr.$$.fragment),Y$=h(`
選擇 Network Policy Server
`),l(br.$$.fragment),eg=h(`
點開 Policies -> Network Policies -> New
`),l(Nr.$$.fragment),tg=i(),l(Fr.$$.fragment),ng=h(`
設定後在 Client 端上可輸入在群組內使用者的帳號和密碼登入 VPN
若遇到登入失敗的問題或一直卡在連線中：
一樣到 Network Policy Server
`),l(Or.$$.fragment),rg=h(`
選擇剛剛建立的規則，按右鍵 -> Properties
`),l(Ir.$$.fragment),sg=h(`
Constraints -> Authentication Methods -> Add… -> 選 Microsoft: Secured password (EAP-MSCHAP v2) -> OK
`),l(Ur.$$.fragment),ig=i(),l(Wr.$$.fragment),rm=i(),dt=d("h3"),dt.innerHTML=yu,sm=i(),ut=d("h4"),ut.innerHTML=Mu,im=i(),K=d("p"),ag=h(`如果有 Web Server，SSTP 所使用的憑證需要和 Web Server 一樣
故要簽一張萬用域名(*)的憑證 (若 Web Server 和 SSTP 的 FQDN 不一樣的話)
`),l(Br.$$.fragment),lg=h(`
簽好後到 Server Manager -> Tools -> Routing and Remote Access
`),l(Gr.$$.fragment),pg=h(`
Server -> 右鍵 -> Properties
`),l(Vr.$$.fragment),mg=i(),l(Jr.$$.fragment),am=i(),ol=new M(!1),$l=i(),ht=d("h3"),ht.innerHTML=Au,lm=i(),S=d("p"),og=h(`若題目有要求用 AD 使用者帳號驗證，但 VPN 不是安裝在 Domain Contoller 上的時候就會需要 RADIUS
在 Domain Controller 上先安裝 Network Policy and Access Services
`),l(jr.$$.fragment),$g=h(`
安裝後 -> 點選 Tools -> Network Policy Server -> NPS (Local)
確認選項是 VPN Connections 後，點選 Configure VPN or Dial-Up
`),l(qr.$$.fragment),gg=h(`
選擇 Virtual Private Network (VPN) Connections
`),l(Kr.$$.fragment),fg=h(`
Next -> Add…
`),l(zr.$$.fragment),dg=h(`
將被驗證方的資料輸入完後按 Verify…
`),l(Qr.$$.fragment),ug=h(`
再按 Resolve，系統會確定 Client 端是否在線，若在線下面的 IP address 會顯示
`),l(Xr.$$.fragment),hg=h(`
將三個選項都確認無誤後再下一步
`),l(Zr.$$.fragment),cg=h(`
接著設定可以使用 VPN 的群組
`),l(Yr.$$.fragment),_g=h(`
IP Fliter 可依需求設定，若無需設定直接 Next
`),l(es.$$.fragment),vg=h(`
僅勾選 Strongest encryption
`),l(ts.$$.fragment),Cg=h(`
Realm Name 可直接跳過
`),l(ns.$$.fragment),wg=h(`
RADIUS Server 端設定完成，轉到 Client 端
Server Manager -> Tools -> Routing and Remote Access -> 右鍵 Server -> Properties -> Security
將 Authentication provider 和 Accounting provider 都設為 RADIUS Accounting -> Configure…
`),l(rs.$$.fragment),Sg=h(`
按 New…
`),l(ss.$$.fragment),kg=h(`
Server name 輸入 Server 端的 IP Address，Shared secret 輸入在 Server 端設定好的密碼，Accounting provider 的 Configure 也照樣設定
`),l(is.$$.fragment),Pg=h(`
按 OK 後就設定完成
`),l(as.$$.fragment),pm=i(),ct=d("h2"),ct.innerHTML=Lu,mm=i(),b=d("p"),Hg=h(`在 Windows Server 端的操作：打開 MMC -> 導入 Certificates -> Computer Account -> Local Computer
`),l(ls.$$.fragment),Tg=h(`
Trusted Root Certificates Authorities -> Certificates -> 選擇要讓外部電腦驗證的根憑證 -> 右鍵 All Tasks -> Export…
`),l(ps.$$.fragment),xg=h(`
檔案格式選 DER 或 Base-64 則一即可
`),l(ms.$$.fragment),yg=h(`
在外部電腦端的操作：打開 MMC -> 導入 Ceritficates -> Computer Account -> Local Computer -> Trusted Root Certificates Authorities -> Ceritficates -> 右鍵 All Tasks -> Import…
`),l(os.$$.fragment),Mg=h(`
選取剛剛自己導出的根憑證
`),l($s.$$.fragment),Ag=h(`
選擇 Place all ceritificates in the following store，並確認憑證倉庫為「Trusted Root Certificates Authorities」
`),l(gs.$$.fragment),Lg=h(`
最後按下 Finish，即安裝完成根憑證，瀏覽內部網站時不會再跳出憑證錯誤等訊息
`),l(fs.$$.fragment),om=i(),_t=d("h2"),_t.innerHTML=Eu,$m=i(),vt=d("h3"),vt.innerHTML=Du,gm=i(),P=d("p"),l(ds.$$.fragment),Eg=h(`
進入安裝介面後，按「Shift + F10」叫出 cmd，並輸入 regedit
`),l(us.$$.fragment),Dg=h(`
找到「`),fa=d("strong"),fa.textContent=Ru,Rg=h(`」
`),l(hs.$$.fragment),bg=h(`
新增一個「LabConfig」機碼
`),l(cs.$$.fragment),Ng=h(`
在機碼內部新增三個 DWORD (32-bit) 值，分別為「`),da=d("strong"),da.textContent=bu,Fg=h("」、「"),ua=d("strong"),ua.textContent=Nu,Og=h("」、「"),ha=d("strong"),ha.textContent=Fu,Ig=h("」及「"),ca=d("strong"),ca.textContent=Ou,Ug=h(`」，並將值全部設定為 1
`),l(_s.$$.fragment),Wg=i(),l(vs.$$.fragment),Bg=i(),l(Cs.$$.fragment),Gg=i(),l(ws.$$.fragment),Vg=h(`
最後回上一步再進入安裝介面，即成功進入安裝介面
`),l(Ss.$$.fragment),fm=i(),Ct=d("h2"),Ct.innerHTML=Iu,dm=i(),wt=d("h3"),wt.innerHTML=Uu,um=i(),ks=d("p"),Jg=h(`到 Active Directory Users and Computers -> New -> Organizational Unit
`),l(Ps.$$.fragment),hm=i(),St=d("h3"),St.innerHTML=Wu,cm=i(),G=d("p"),jg=h(`直接將 OU 刪除的話，會遇到這個錯誤：
`),l(Hs.$$.fragment),qg=h(`
若要刪除 OU 需先設定：
Step 1. 將目標網域右鍵 -> View -> 點選 Advanced Features
`),l(Ts.$$.fragment),Kg=h(`
Step 2. 到想要刪除的 OU 右鍵 -> Properties -> Object -> 將 Project object from accidental deletion 取消勾選 -> OK
`),l(xs.$$.fragment),zg=i(),l(ys.$$.fragment),Qg=h(`
刪除時就不會出現錯誤了`),_m=i(),kt=d("h2"),kt.innerHTML=Bu,vm=i(),Te=d("p"),Xg=h(`不要使用掛載後的硬碟路徑，直接使用其網路路徑
`),l(Ms.$$.fragment),Zg=i(),l(As.$$.fragment),Cm=i(),Pt=d("h2"),Pt.innerHTML=Gu,wm=i(),Ht=d("h3"),Ht.innerHTML=Vu,Sm=i(),O=d("p"),Yg=h("打開 "),_a=d("code"),_a.textContent=Ju,ef=h(`
將這三個檔案複製到 `),va=d("code"),va.textContent=ju,tf=i(),l(Ls.$$.fragment),nf=i(),l(Es.$$.fragment),rf=h(`
再回到 admx 資料夾，選擇當下系統的語系
(若英文就是 en-US，中文就是 zh-TW，這裡的系統是 en-US)
複製裡面全部的檔案到 `),Ca=d("code"),Ca.textContent=qu,sf=i(),l(Ds.$$.fragment),km=i(),Tt=d("h3"),Tt.innerHTML=Ku,Pm=i(),V=d("p"),af=h("執行指令 "),wa=d("code"),wa.textContent=zu,lf=h("，再開啟 "),Sa=d("code"),Sa.textContent=Qu,pf=h(` 或 Group Policy Management，在 Computer Configuration -> Administrative Templates 下即可看到四個新的與 Edge 相關的 Policy 設定
`),l(Rs.$$.fragment),mf=i(),l(bs.$$.fragment),of=h(`
註：若 Client 端未安裝 ADMX 也可以套用規則`),Hm=i(),xt=d("h3"),xt.innerHTML=Xu,Tm=i(),yt=d("ul"),ka=d("li"),$f=h(`Setting
`),l(Ns.$$.fragment),gf=i(),Pa=d("li"),ff=h(`Effect
`),l(Fs.$$.fragment),xm=i(),Mt=d("h3"),Mt.innerHTML=Zu,ym=i(),At=d("ul"),Ha=d("li"),df=h(`EN
`),l(Os.$$.fragment),uf=i(),Ta=d("li"),hf=h(`ZH_TW
`),l(Is.$$.fragment),Mm=i(),Lt=d("h3"),Lt.innerHTML=Yu,Am=i(),xa=d("p"),l(Us.$$.fragment),Lm=i(),Et=d("h3"),Et.innerHTML=eh,Em=i(),Dt=d("ul"),Rt=d("li"),cf=h(`Setting
`),l(Ws.$$.fragment),_f=i(),l(Bs.$$.fragment),vf=i(),ya=d("li"),Cf=h(`Effect
`),l(Gs.$$.fragment),Dm=i(),bt=d("h2"),bt.innerHTML=th,Rm=i(),Vs=d("p"),wf=h(`打開 AD AC，到 domain (local) -> System -> Password Settings Container -> 右鍵 Password Settings
`),l(Js.$$.fragment),bm=i(),gl=new M(!1),fl=i(),D=d("p"),l(js.$$.fragment),Sf=h(`
回到 Users -> 選擇自己要套用設定的使用者或群組 -> 右鍵 Properties -> Password Settings -> Assign…
`),l(qs.$$.fragment),kf=h(`
選 Advenced…
`),l(Ks.$$.fragment),Pf=h(`
選 Find Now -> 選擇自己建立的規則
`),l(zs.$$.fragment),Hf=h(`
若新輸入的密碼不到 8 個字：
`),l(Qs.$$.fragment),Tf=i(),l(Xs.$$.fragment),xf=h(`
若有至少 8 個字：
`),l(Zs.$$.fragment),yf=i(),l(Ys.$$.fragment),Nm=i(),Nt=d("h2"),Nt.innerHTML=nh,Fm=i(),L=d("p"),Mf=h(`安裝服務：
`),l(ei.$$.fragment),Af=i(),l(ti.$$.fragment),Lf=i(),l(ni.$$.fragment),Ef=h(`
使用 Internet Explorer 可瀏覽其 RDWeb (在沒有 SSL 簽證的狀況下)：
`),l(ri.$$.fragment),Df=i(),l(si.$$.fragment),Rf=h(`
也可透過網域使用者直接遠端 Server：
`),l(ii.$$.fragment),bf=i(),l(ai.$$.fragment),Nf=h(`
若簽證了可使用 Edge 正常預覽：
`),l(li.$$.fragment),Om=i(),Ft=d("h2"),Ft.innerHTML=rh,Im=i(),xe=d("p"),Ff=h(`按一下 Windows Key + R，輸入 regedit 後 Enter
設定「`),Ma=d("strong"),Ma.textContent=sh,Of=h(`」為 1
`),l(pi.$$.fragment),Um=i(),Ot=d("h2"),Ot.innerHTML=ih,Wm=i(),mi=d("p"),mi.innerHTML=ah,Bm=i(),oi=d("ul"),oi.innerHTML=lh,Gm=i(),dl=new M(!1),ul=i(),It=d("h2"),It.innerHTML=ph,Vm=i(),pe=d("p"),If=h(`先到已安裝 Main CA 的 Server，打開 Certification Authority -> 點選 Server 後右鍵 Properties
`),l($i.$$.fragment),Uf=h(`
點選 Extensions -> Select extension 選擇 CDP -> 點選 http 開頭的項目 -> 勾選第三跟第四個選項
`),l(gi.$$.fragment),Wf=h(`
Select extension 換選擇 AIA -> 點選 http 開頭的項目 -> 勾選第一個選項 -> 點擊 Apply
`),l(fi.$$.fragment),Jm=i(),ye=d("p"),Bf=h(`接著轉到需要安裝 Sub CA 的 Server，打開 Certification Authority -> 點選 Server 後右鍵 All Tasks -> Renew CA Certificate…
`),l(di.$$.fragment),Gf=h(`
確認 Computer Name 跟 Parent CA 都正確後，點擊 OK
`),l(ui.$$.fragment),jm=i(),me=d("p"),Vf=h(`回到 Main CA Server -> Pending Requests -> Issue 從 Sub CA 發起的請求
`),l(hi.$$.fragment),Jf=h(`
Issued Certidicates -> 選擇剛剛 Issue 的 CA -> Details -> Copy to File…
`),l(ci.$$.fragment),jf=h(`
選擇 DER encoded 的 X.509 -> Next -> 儲存於自己指定的位置 -> 複製到 Sub CA Server
`),l(_i.$$.fragment),qm=i(),de=d("p"),qf=h(`再回到 Sub CA Server，點選 Server 後右鍵 All Tasks -> Install CA Certificate…
`),l(vi.$$.fragment),Kf=h(`
右下角選擇 X.509 類型的 CA -> 選擇剛剛簽好的 CA
`),l(Ci.$$.fragment),zf=h(`
安裝好後，Sub CA Server 圖標會有綠色勾勾，代表正常運作`),Km=i(),Ut=d("h3"),Ut.innerHTML=mh,zm=i(),ue=d("p"),l(wi.$$.fragment),Qf=h(`
此錯誤為無法從 Root CA 的 CRL 發布點下載撤銷憑證名單，可先嘗試透過在 hosts 內增加對 Root CA Server 的記錄 (可能需要執行 `),Aa=d("code"),Aa.textContent=oh,Xf=h(` 保證系統會透過 hosts 內的記錄找尋)
`),l(Si.$$.fragment),Qm=i(),ki=d("p"),ki.textContent=$h,Xm=i(),hl=new M(!1),cl=i(),Wt=d("h2"),Wt.innerHTML=gh,Zm=i(),Bt=d("h3"),Bt.innerHTML=fh,Ym=i(),Pi=d("p"),Zf=h(`打開 Server Manager -> File and Storage Services -> Storage Pools -> 右鍵 -> New Storage Pool…
`),l(Hi.$$.fragment),eo=i(),Gt=d("h3"),Gt.innerHTML=dh,to=i(),La=d("p"),l(Ti.$$.fragment),no=i(),_l=new M(!1),vl=i(),Cl=new M(!1),wl=i(),N=d("p"),Yf=h(`找到 Disk Management
`),l(xi.$$.fragment),ed=h(`
對剛建立的虛擬硬碟右鍵選擇 Online -> Initialize Disk
`),l(yi.$$.fragment),l(Mi.$$.fragment),td=h(`
選擇 GPT 分區
`),l(Ai.$$.fragment),nd=h(`
選擇磁區右鍵選擇 New Simple Volume…
`),l(Li.$$.fragment),rd=h(`
建立完成
`),l(Ei.$$.fragment),sd=i(),l(Di.$$.fragment),ro=i(),Vt=d("h2"),Vt.innerHTML=uh,so=i(),ne=d("p"),id=h(`安裝 Data Deduplication
`),l(Ri.$$.fragment),ad=h(`
File and Storage Services -> Volumes -> 選中要設定的磁區 -> Configure Data Deduplication
`),l(bi.$$.fragment),ld=h(`
選擇 General purpose file server
`),l(Ni.$$.fragment),pd=h(`
再按 OK 就完成了`),io=i(),Jt=d("h2"),Jt.innerHTML=hh,ao=i(),jt=d("h3"),jt.innerHTML=ch,lo=i(),Fi=d("p"),Fi.textContent=_h,po=i(),Sl=new M(!1),kl=i(),Oi=d("p"),Oi.textContent=vh,mo=i(),Pl=new M(!1),Hl=i(),Ea=d("p"),l(Ii.$$.fragment),oo=i(),qt=d("h3"),qt.innerHTML=Ch,$o=i(),Ui=d("p"),Ui.innerHTML=wh,go=i(),Tl=new M(!1),xl=i(),Da=d("p"),l(Wi.$$.fragment),this.h()},l(e){x=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(x)!=="svelte-6z2xkb"&&(x.innerHTML=ve),oe=a(e),X=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(X)!=="svelte-dhtil8"&&(X.innerHTML=R),Z=a(e),$e=u(e,"P",{"data-svelte-h":!0}),_($e)!=="svelte-5hga6e"&&($e.innerHTML=Sd),Fl=a(e),Ee=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ee)!=="svelte-1xaqksb"&&(Ee.innerHTML=kd),Ol=a(e),Ce=u(e,"P",{});var n=C(Ce);Co=c(n,"GPO -> User Configuration -> Policies -> Administrative Templetes -> Control Panel -> 設定 Prohibit access to Control Panel and PC settings 為 "),Qi=u(n,"STRONG",{"data-svelte-h":!0}),_(Qi)!=="svelte-tra0oh"&&(Qi.textContent=Pd),wo=a(n),p(Zt.$$.fragment,n),n.forEach(t),Il=a(e),De=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(De)!=="svelte-epwre2"&&(De.innerHTML=Hd),Ul=a(e),re=u(e,"P",{});var Bi=C(re);So=c(Bi,`GPO -> User Configuration -> Administrative Templetes -> System -> 設定 Don’t run specified Windows applications
`),p(Yt.$$.fragment,Bi),ko=c(Bi,`
設定為 `),Xi=u(Bi,"STRONG",{"data-svelte-h":!0}),_(Xi)!=="svelte-tra0oh"&&(Xi.textContent=Td),Po=c(Bi,`，並點選 List of disallowed applications，在 Value 欄位設定要禁用的應用程式
`),p(en.$$.fragment,Bi),Bi.forEach(t),Wl=a(e),Re=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Re)!=="svelte-lnk77j"&&(Re.innerHTML=xd),Bl=a(e),we=u(e,"P",{});var yl=C(we);Ho=c(yl,"GPO -> Computer Configuration -> Policies -> Administrative Templetes -> System -> Logon -> 設定 Block user from showing account details on sign-in 為 "),Zi=u(yl,"STRONG",{"data-svelte-h":!0}),_(Zi)!=="svelte-tra0oh"&&(Zi.textContent=yd),To=a(yl),p(tn.$$.fragment,yl),yl.forEach(t),Gl=a(e),be=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(be)!=="svelte-12i782l"&&(be.innerHTML=Md),Vl=a(e),nn=u(e,"P",{"data-svelte-h":!0}),_(nn)!=="svelte-924v4l"&&(nn.textContent=Ad),Jl=a(e),Oa=A(e,!1),Ia=a(e),ge=u(e,"P",{});var Ra=C(ge);xo=c(Ra,`Step 2. 用 GPO 設定讓此指令在登入時自動執行
新增 GPO -> User Configuration -> Policies -> Windows Settings -> Script (Logon/Logoff) -> Logon -> Add -> Browse -> 將 Script 丟至彈出的資料夾 -> 選擇後點選 OK
`),p(rn.$$.fragment,Ra),yo=a(Ra),p(sn.$$.fragment,Ra),Mo=c(Ra,`
註：最好放在下面「Show Files…」的資料夾內，否則有機率腳本會無法生效`),Ra.forEach(t),jl=a(e),Ne=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ne)!=="svelte-lz2frv"&&(Ne.innerHTML=Ld),ql=a(e),an=u(e,"P",{"data-svelte-h":!0}),_(an)!=="svelte-1e9k50f"&&(an.textContent=Ed),Kl=a(e),Ua=A(e,!1),Wa=a(e),Fe=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Fe)!=="svelte-k62u4a"&&(Fe.innerHTML=Dd),zl=a(e),Se=u(e,"P",{});var Ml=C(Se);Ao=c(Ml,"Local GPO -> Computer Configuration -> Administrative Templates -> Network -> Lanman Workstation -> 設定 Enable insecure guest logons 為 "),Yi=u(Ml,"STRONG",{"data-svelte-h":!0}),_(Yi)!=="svelte-tra0oh"&&(Yi.textContent=Rd),Lo=a(Ml),p(ln.$$.fragment,Ml),Ml.forEach(t),Ql=a(e),Oe=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Oe)!=="svelte-19caf4p"&&(Oe.innerHTML=bd),Xl=a(e),pn=u(e,"P",{});var md=C(pn);Eo=c(md,`若要指定特別使用者套用 Group Policy (刪除 Authentication Users)，至少要保留一台 Computer (最好是 Server 和 Client 都保留)
`),p(mn.$$.fragment,md),md.forEach(t),Zl=a(e),Ie=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ie)!=="svelte-hofbxf"&&(Ie.innerHTML=Nd),Yl=a(e),j=u(e,"P",{});var Me=C(j);Do=c(Me,`GPO -> Computer Configuration -> Windows Settings -> Security Settings -> Local Policy -> Security Options
`),p(on.$$.fragment,Me),Ro=a(Me),p($n.$$.fragment,Me),bo=a(Me),p(gn.$$.fragment,Me),No=c(Me,`
當電腦準備登入時會顯示：
`),p(fn.$$.fragment,Me),Me.forEach(t),ep=a(e),Ue=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ue)!=="svelte-1bqfzki"&&(Ue.innerHTML=Fd),tp=a(e),se=u(e,"P",{});var Gi=C(se);Fo=c(Gi,"GPO -> Computer Configuration -> Administrative Templates -> Windows Components -> Windows Update -> 設定 Remove access to use all Windows Update features 為 "),ea=u(Gi,"STRONG",{"data-svelte-h":!0}),_(ea)!=="svelte-tra0oh"&&(ea.textContent=Od),Oo=a(Gi),p(dn.$$.fragment,Gi),Io=c(Gi,`
效果：
`),p(un.$$.fragment,Gi),Gi.forEach(t),np=a(e),We=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(We)!=="svelte-1pm9i5y"&&(We.innerHTML=Id),rp=a(e),Ba=A(e,!1),Ga=a(e),hn=u(e,"P",{"data-svelte-h":!0}),_(hn)!=="svelte-15ocirl"&&(hn.textContent=Ud),sp=a(e),Be=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Be)!=="svelte-eeh9bo"&&(Be.innerHTML=Wd),ip=a(e),ke=u(e,"P",{});var Al=C(ke);Uo=c(Al,"將登錄機碼匯出為 "),ta=u(Al,"CODE",{"data-svelte-h":!0}),_(ta)!=="svelte-1f6dfg"&&(ta.textContent=Bd),Wo=c(Al,` 格式的檔案：右鍵 -> Export -> 選擇路徑
`),p(cn.$$.fragment,Al),Al.forEach(t),ap=a(e),Va=A(e,!1),Ja=a(e),_n=u(e,"P",{"data-svelte-h":!0}),_(_n)!=="svelte-1rf15va"&&(_n.textContent=Gd),lp=a(e),Ge=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Ge)!=="svelte-1ygr0y3"&&(Ge.innerHTML=Vd),pp=a(e),Ve=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ve)!=="svelte-1ipv3j1"&&(Ve.innerHTML=Jd),mp=a(e),vn=u(e,"P",{"data-svelte-h":!0}),_(vn)!=="svelte-1oz3ht5"&&(vn.innerHTML=jd),op=a(e),Je=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Je)!=="svelte-ayfpyk"&&(Je.innerHTML=qd),$p=a(e),ja=A(e,!1),qa=a(e),Y=u(e,"P",{});var Kt=C(Y);Bo=c(Kt,`先允許 Primary DNS 跟 Secondary DNS 的 Zone Transfer 功能
DC：
`),p(Cn.$$.fragment,Kt),Go=c(Kt,`
SRV：
`),p(wn.$$.fragment,Kt),Vo=c(Kt,`
選擇域名按右鍵 -> Transfer new copy of zone from Master
`),p(Sn.$$.fragment,Kt),Jo=c(Kt,`
即可完成同步`),Kt.forEach(t),gp=a(e),kn=u(e,"P",{"data-svelte-h":!0}),_(kn)!=="svelte-11bnbis"&&(kn.textContent=Kd),fp=a(e),je=u(e,"H4",{id:!0,"data-svelte-h":!0}),_(je)!=="svelte-zysikv"&&(je.innerHTML=zd),dp=a(e),Pe=u(e,"P",{});var Ll=C(Pe);jo=c(Ll,`在 Primary DNS 上設定當記錄發生變化時通知 Secondary DNS
`),p(Pn.$$.fragment,Ll),qo=c(Ll,`
設定 Secondary DNS 可以接收 Notify
`),p(Hn.$$.fragment,Ll),Ll.forEach(t),up=a(e),qe=u(e,"H4",{id:!0,"data-svelte-h":!0}),_(qe)!=="svelte-1pq0ti3"&&(qe.innerHTML=Qd),hp=a(e),Tn=u(e,"P",{});var od=C(Tn);p(xn.$$.fragment,od),Ko=c(od,`
Refresh interval：Secondary DNS 多久向 Primary DNS 伺服器同步
Retry interval：當 Secondary DNS 向 Primary DNS 同步但無法連線到 Primary DNS，多久後重試
Expires after：當 Secondary DNS 無法連線到 Primary DNS 會一直重試，如果重試超過到期時間就放棄重試
Minimum TTL：當其它 DNS 伺服器查詢這個網域的記錄時，資料儲存在對方伺服器快取中的時間 (若在到期前若對方伺服器又收到相同查詢就會直接回應快取中的資料)`),od.forEach(t),cp=a(e),Ke=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ke)!=="svelte-ofr1m5"&&(Ke.innerHTML=Xd),_p=a(e),fe=u(e,"P",{});var ba=C(fe);zo=c(ba,`與 Forward 功能相似，但是可以指定網域傳送到指定伺服器
`),p(yn.$$.fragment,ba),Qo=a(ba),p(Mn.$$.fragment,ba),Xo=c(ba,`
DNS Domain：當收到這個網域的 DNS Request 時送到指定的 DNS Servers
IP addresses of the master servers：指定網域的 DNS Servers`),ba.forEach(t),vp=a(e),Ka=A(e,!1),za=a(e),ze=u(e,"P",{});var uo=C(ze);p(An.$$.fragment,uo),Zo=a(uo),p(Ln.$$.fragment,uo),uo.forEach(t),Cp=a(e),Qe=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Qe)!=="svelte-i385jf"&&(Qe.innerHTML=Zd),wp=a(e),Qa=A(e,!1),Xa=a(e),Xe=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Xe)!=="svelte-gtdgk0"&&(Xe.innerHTML=Yd),Sp=a(e),Ze=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ze)!=="svelte-4np15j"&&(Ze.innerHTML=eu),kp=a(e),En=u(e,"P",{"data-svelte-h":!0}),_(En)!=="svelte-1jmolw9"&&(En.textContent=tu),Pp=a(e),Za=A(e,!1),Ya=a(e),na=u(e,"P",{});var Sh=C(na);p(Dn.$$.fragment,Sh),Sh.forEach(t),Hp=a(e),Rn=u(e,"P",{});var $d=C(Rn);Yo=c($d,`若忘記指令也可透過 PowerShell IDE 尋找指令
`),p(bn.$$.fragment,$d),$d.forEach(t),Tp=a(e),Ye=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ye)!=="svelte-12dfwjr"&&(Ye.innerHTML=nu),xp=a(e),Nn=u(e,"P",{"data-svelte-h":!0}),_(Nn)!=="svelte-1rk2d4"&&(Nn.innerHTML=ru),yp=a(e),el=A(e,!1),tl=a(e),ra=u(e,"P",{});var kh=C(ra);p(Fn.$$.fragment,kh),kh.forEach(t),Mp=a(e),nl=A(e,!1),rl=a(e),sl=A(e,!1),il=a(e),et=u(e,"P",{});var ho=C(et);p(On.$$.fragment,ho),e$=a(ho),p(In.$$.fragment,ho),ho.forEach(t),Ap=a(e),tt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(tt)!=="svelte-927kq7"&&(tt.innerHTML=su),Lp=a(e),Un=u(e,"P",{"data-svelte-h":!0}),_(Un)!=="svelte-12obcyg"&&(Un.textContent=iu),Ep=a(e),al=A(e,!1),ll=a(e),Wn=u(e,"P",{"data-svelte-h":!0}),_(Wn)!=="svelte-1sf15ix"&&(Wn.textContent=au),Dp=a(e),nt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(nt)!=="svelte-1pnrob9"&&(nt.innerHTML=lu),Rp=a(e),pl=A(e,!1),ml=a(e),rt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(rt)!=="svelte-jb9b1l"&&(rt.innerHTML=pu),bp=a(e),y=u(e,"P",{});var E=C(y);t$=c(E,`進入 Control Panel -> Windows Defender Firewall -> Advenced settings
`),p(Bn.$$.fragment,E),n$=c(E,`
選 Inbound rules -> New Rule
`),p(Gn.$$.fragment,E),r$=a(E),p(Vn.$$.fragment,E),s$=a(E),p(Jn.$$.fragment,E),i$=a(E),p(jn.$$.fragment,E),a$=c(E,`
選擇 ICMP：
`),p(qn.$$.fragment,E),l$=a(E),p(Kn.$$.fragment,E),p$=a(E),p(zn.$$.fragment,E),m$=a(E),p(Qn.$$.fragment,E),o$=c(E,`
即完成 ICMP 設定
`),p(Xn.$$.fragment,E),E.forEach(t),Np=a(e),st=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(st)!=="svelte-1hgj8bt"&&(st.innerHTML=mu),Fp=a(e),it=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(it)!=="svelte-1bn527i"&&(it.innerHTML=ou),Op=a(e),ie=u(e,"P",{});var Vi=C(ie);$$=c(Vi,`打開 Group Policy Management -> Create a GPO in this domain, and Link it here
`),p(Zn.$$.fragment,Vi),g$=c(Vi,`
選擇 Computer Configuration -> Policies -> Windows Settings -> Security Settings -> Public Keys -> Certificate Services Client - Auto-Enrollmemt
設定 Configuration Model 為 `),sa=u(Vi,"STRONG",{"data-svelte-h":!0}),_(sa)!=="svelte-tra0oh"&&(sa.textContent=$u),f$=a(Vi),p(Yn.$$.fragment,Vi),Vi.forEach(t),Ip=a(e),at=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(at)!=="svelte-12ij8jf"&&(at.innerHTML=gu),Up=a(e),F=u(e,"P",{});var z=C(F);d$=c(z,`選擇 Automatic Certification Settings
右鍵 -> New -> Automatic Certificate Request
`),p(er.$$.fragment,z),u$=c(z,`
選擇 Computer
`),p(tr.$$.fragment,z),h$=a(z),p(nr.$$.fragment,z),c$=a(z),p(rr.$$.fragment,z),_$=c(z,`
輸入 `),ia=u(z,"CODE",{"data-svelte-h":!0}),_(ia)!=="svelte-1fy3f7c"&&(ia.textContent=fu),v$=c(z,` 後，即完成設定
`),p(sr.$$.fragment,z),z.forEach(t),Wp=a(e),lt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(lt)!=="svelte-k1pf10"&&(lt.innerHTML=du),Bp=a(e),ir=u(e,"P",{});var gd=C(ir);C$=c(gd,`安裝 File Server Resource Manager
`),p(ar.$$.fragment,gd),gd.forEach(t),Gp=a(e),pt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(pt)!=="svelte-ch0v1b"&&(pt.innerHTML=uu),Vp=a(e),ae=u(e,"P",{});var Ji=C(ae);w$=c(Ji,`選擇 Quota Management -> Quotas
`),p(lr.$$.fragment,Ji),S$=c(Ji,`
右鍵 Create Quota
`),p(pr.$$.fragment,Ji),k$=c(Ji,`
選好要套用的共享資料夾，如果在系統給的選項內沒有題目的條件就用 Custom Properties
`),p(mr.$$.fragment,Ji),Ji.forEach(t),Jp=a(e),mt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(mt)!=="svelte-5xvxel"&&(mt.innerHTML=hu),jp=a(e),ee=u(e,"P",{});var zt=C(ee);aa=u(zt,"STRONG",{"data-svelte-h":!0}),_(aa)!=="svelte-p7pb6r"&&(aa.textContent=cu),P$=c(zt,`
選擇 File Screening Management -> File Groups
`),p(or.$$.fragment,zt),H$=c(zt,`
右鍵 Create File Group
`),p($r.$$.fragment,zt),T$=c(zt,`
將此群組包含的檔案類型都加到 Files to include 內 (註：＊.exe 代表封鎖全部附檔名為 exe 的檔案)
`),p(gr.$$.fragment,zt),zt.forEach(t),qp=a(e),B=u(e,"P",{});var he=C(B);la=u(he,"STRONG",{"data-svelte-h":!0}),_(la)!=="svelte-1ikqcpl"&&(la.textContent=_u),x$=c(he,`
選擇 File Screening Management -> File Screen Templates
`),p(fr.$$.fragment,he),y$=c(he,`
右鍵 Create File Screen Template
`),p(dr.$$.fragment,he),M$=a(he),pa=u(he,"STRONG",{"data-svelte-h":!0}),_(pa)!=="svelte-36j3yp"&&(pa.textContent=vu),A$=a(he),p(ur.$$.fragment,he),he.forEach(t),Kp=a(e),te=u(e,"P",{});var Qt=C(te);ma=u(Qt,"STRONG",{"data-svelte-h":!0}),_(ma)!=="svelte-18l87u8"&&(ma.textContent=Cu),L$=c(Qt,`
選擇 File Screening Management -> File Screens
`),p(hr.$$.fragment,Qt),E$=c(Qt,`
右鍵 Create File Screen
`),p(cr.$$.fragment,Qt),D$=c(Qt,`
選好要套用的共享資料夾，並將選項選到剛剛設定的範本
`),p(_r.$$.fragment,Qt),Qt.forEach(t),zp=a(e),ot=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(ot)!=="svelte-1tjaib9"&&(ot.innerHTML=wu),Qp=a(e),He=u(e,"P",{});var El=C(He);R$=c(El,`按一下 Windows Key + R，輸入 ncpa.cpl 後 Enter
`),p(vr.$$.fragment,El),b$=c(El,`
可直接打開控制台網路介面
`),p(Cr.$$.fragment,El),El.forEach(t),Xp=a(e),$t=u(e,"H2",{id:!0,"data-svelte-h":!0}),_($t)!=="svelte-fuiknc"&&($t.innerHTML=Su),Zp=a(e),le=u(e,"P",{});var ji=C(le);N$=c(ji,`按一下 Windows Key + R，輸入 regedit 後 Enter
在「`),oa=u(ji,"STRONG",{"data-svelte-h":!0}),_(oa)!=="svelte-1f1gqr1"&&(oa.textContent=ku),F$=c(ji,"」下，找到「"),$a=u(ji,"STRONG",{"data-svelte-h":!0}),_($a)!=="svelte-ldgmsq"&&($a.textContent=Pu),O$=c(ji,`」選項並編輯其機碼值為欲設定的 Port 後重啟即可
`),p(wr.$$.fragment,ji),ji.forEach(t),Yp=a(e),gt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(gt)!=="svelte-19cxttp"&&(gt.innerHTML=Hu),em=a(e),q=u(e,"P",{});var Ae=C(q);I$=c(Ae,`打開 DHCP -> 選擇要設定的 Scope -> Reservations -> New Reservation
`),p(Sr.$$.fragment,Ae),U$=c(Ae,`
Reservation name (此保留設定的名稱)
IP address (欲保留的 IP 位址)
MAC address (保留的 IP 要給誰)
Description (描述此保留設定，可略過)
`),p(kr.$$.fragment,Ae),W$=c(Ae,`
設定好後，到被保留 IP 的電腦上執行 `),ga=u(Ae,"CODE",{"data-svelte-h":!0}),_(ga)!=="svelte-pv0nhz"&&(ga.textContent=Tu),B$=c(Ae,` (電腦網卡須設定為 DHCP)
`),p(Pr.$$.fragment,Ae),Ae.forEach(t),tm=a(e),ft=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(ft)!=="svelte-1i017zr"&&(ft.innerHTML=xu),nm=a(e),w=u(e,"P",{});var k=C(w);G$=c(k,`新增 VPN 規則，選擇 DirectAccess and VPN (RAS)
`),p(Hr.$$.fragment,k),V$=c(k,`
重啟後點選 Remote Access Management Console 後再選 RRAS Management console
`),p(Tr.$$.fragment,k),J$=c(k,`
選擇伺服器，右鍵選擇 Configure and Enable Routing and Remote Access
`),p(xr.$$.fragment,k),j$=c(k,`
選擇 Custom configuration
`),p(yr.$$.fragment,k),q$=c(k,`
選擇 VPN Access 即可
`),p(Mr.$$.fragment,k),K$=c(k,`
若無設定 DHCP：
設定 VPN 的 Static address pool，並輸入範圍可使用 VPN 的 IP 範圍
`),p(Ar.$$.fragment,k),z$=c(k,`
(若有設定 DHCP 可直接略過到下一步驟)
回到 Server Manager，選 Tools -> Active Directory Users and Computers
`),p(Lr.$$.fragment,k),Q$=c(k,`
選取想要遠端存取的使用者，並右鍵選擇「Add to a group…」
`),p(Er.$$.fragment,k),X$=c(k,`
輸入 Remote 後選擇 Check Names
`),p(Dr.$$.fragment,k),Z$=c(k,`
選擇 Remote Desktop Users 後，按 OK
`),p(Rr.$$.fragment,k),Y$=c(k,`
選擇 Network Policy Server
`),p(br.$$.fragment,k),eg=c(k,`
點開 Policies -> Network Policies -> New
`),p(Nr.$$.fragment,k),tg=a(k),p(Fr.$$.fragment,k),ng=c(k,`
設定後在 Client 端上可輸入在群組內使用者的帳號和密碼登入 VPN
若遇到登入失敗的問題或一直卡在連線中：
一樣到 Network Policy Server
`),p(Or.$$.fragment,k),rg=c(k,`
選擇剛剛建立的規則，按右鍵 -> Properties
`),p(Ir.$$.fragment,k),sg=c(k,`
Constraints -> Authentication Methods -> Add… -> 選 Microsoft: Secured password (EAP-MSCHAP v2) -> OK
`),p(Ur.$$.fragment,k),ig=a(k),p(Wr.$$.fragment,k),k.forEach(t),rm=a(e),dt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(dt)!=="svelte-9cxdp3"&&(dt.innerHTML=yu),sm=a(e),ut=u(e,"H4",{id:!0,"data-svelte-h":!0}),_(ut)!=="svelte-1tqhik2"&&(ut.innerHTML=Mu),im=a(e),K=u(e,"P",{});var Le=C(K);ag=c(Le,`如果有 Web Server，SSTP 所使用的憑證需要和 Web Server 一樣
故要簽一張萬用域名(*)的憑證 (若 Web Server 和 SSTP 的 FQDN 不一樣的話)
`),p(Br.$$.fragment,Le),lg=c(Le,`
簽好後到 Server Manager -> Tools -> Routing and Remote Access
`),p(Gr.$$.fragment,Le),pg=c(Le,`
Server -> 右鍵 -> Properties
`),p(Vr.$$.fragment,Le),mg=a(Le),p(Jr.$$.fragment,Le),Le.forEach(t),am=a(e),ol=A(e,!1),$l=a(e),ht=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(ht)!=="svelte-u4b2z"&&(ht.innerHTML=Au),lm=a(e),S=u(e,"P",{});var H=C(S);og=c(H,`若題目有要求用 AD 使用者帳號驗證，但 VPN 不是安裝在 Domain Contoller 上的時候就會需要 RADIUS
在 Domain Controller 上先安裝 Network Policy and Access Services
`),p(jr.$$.fragment,H),$g=c(H,`
安裝後 -> 點選 Tools -> Network Policy Server -> NPS (Local)
確認選項是 VPN Connections 後，點選 Configure VPN or Dial-Up
`),p(qr.$$.fragment,H),gg=c(H,`
選擇 Virtual Private Network (VPN) Connections
`),p(Kr.$$.fragment,H),fg=c(H,`
Next -> Add…
`),p(zr.$$.fragment,H),dg=c(H,`
將被驗證方的資料輸入完後按 Verify…
`),p(Qr.$$.fragment,H),ug=c(H,`
再按 Resolve，系統會確定 Client 端是否在線，若在線下面的 IP address 會顯示
`),p(Xr.$$.fragment,H),hg=c(H,`
將三個選項都確認無誤後再下一步
`),p(Zr.$$.fragment,H),cg=c(H,`
接著設定可以使用 VPN 的群組
`),p(Yr.$$.fragment,H),_g=c(H,`
IP Fliter 可依需求設定，若無需設定直接 Next
`),p(es.$$.fragment,H),vg=c(H,`
僅勾選 Strongest encryption
`),p(ts.$$.fragment,H),Cg=c(H,`
Realm Name 可直接跳過
`),p(ns.$$.fragment,H),wg=c(H,`
RADIUS Server 端設定完成，轉到 Client 端
Server Manager -> Tools -> Routing and Remote Access -> 右鍵 Server -> Properties -> Security
將 Authentication provider 和 Accounting provider 都設為 RADIUS Accounting -> Configure…
`),p(rs.$$.fragment,H),Sg=c(H,`
按 New…
`),p(ss.$$.fragment,H),kg=c(H,`
Server name 輸入 Server 端的 IP Address，Shared secret 輸入在 Server 端設定好的密碼，Accounting provider 的 Configure 也照樣設定
`),p(is.$$.fragment,H),Pg=c(H,`
按 OK 後就設定完成
`),p(as.$$.fragment,H),H.forEach(t),pm=a(e),ct=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(ct)!=="svelte-mskw9o"&&(ct.innerHTML=Lu),mm=a(e),b=u(e,"P",{});var W=C(b);Hg=c(W,`在 Windows Server 端的操作：打開 MMC -> 導入 Certificates -> Computer Account -> Local Computer
`),p(ls.$$.fragment,W),Tg=c(W,`
Trusted Root Certificates Authorities -> Certificates -> 選擇要讓外部電腦驗證的根憑證 -> 右鍵 All Tasks -> Export…
`),p(ps.$$.fragment,W),xg=c(W,`
檔案格式選 DER 或 Base-64 則一即可
`),p(ms.$$.fragment,W),yg=c(W,`
在外部電腦端的操作：打開 MMC -> 導入 Ceritficates -> Computer Account -> Local Computer -> Trusted Root Certificates Authorities -> Ceritficates -> 右鍵 All Tasks -> Import…
`),p(os.$$.fragment,W),Mg=c(W,`
選取剛剛自己導出的根憑證
`),p($s.$$.fragment,W),Ag=c(W,`
選擇 Place all ceritificates in the following store，並確認憑證倉庫為「Trusted Root Certificates Authorities」
`),p(gs.$$.fragment,W),Lg=c(W,`
最後按下 Finish，即安裝完成根憑證，瀏覽內部網站時不會再跳出憑證錯誤等訊息
`),p(fs.$$.fragment,W),W.forEach(t),om=a(e),_t=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(_t)!=="svelte-hu0015"&&(_t.innerHTML=Eu),$m=a(e),vt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(vt)!=="svelte-1elydqn"&&(vt.innerHTML=Du),gm=a(e),P=u(e,"P",{});var T=C(P);p(ds.$$.fragment,T),Eg=c(T,`
進入安裝介面後，按「Shift + F10」叫出 cmd，並輸入 regedit
`),p(us.$$.fragment,T),Dg=c(T,`
找到「`),fa=u(T,"STRONG",{"data-svelte-h":!0}),_(fa)!=="svelte-yg8poe"&&(fa.textContent=Ru),Rg=c(T,`」
`),p(hs.$$.fragment,T),bg=c(T,`
新增一個「LabConfig」機碼
`),p(cs.$$.fragment,T),Ng=c(T,`
在機碼內部新增三個 DWORD (32-bit) 值，分別為「`),da=u(T,"STRONG",{"data-svelte-h":!0}),_(da)!=="svelte-rt1hp5"&&(da.textContent=bu),Fg=c(T,"」、「"),ua=u(T,"STRONG",{"data-svelte-h":!0}),_(ua)!=="svelte-rxzhlz"&&(ua.textContent=Nu),Og=c(T,"」、「"),ha=u(T,"STRONG",{"data-svelte-h":!0}),_(ha)!=="svelte-7cunve"&&(ha.textContent=Fu),Ig=c(T,"」及「"),ca=u(T,"STRONG",{"data-svelte-h":!0}),_(ca)!=="svelte-1k34trc"&&(ca.textContent=Ou),Ug=c(T,`」，並將值全部設定為 1
`),p(_s.$$.fragment,T),Wg=a(T),p(vs.$$.fragment,T),Bg=a(T),p(Cs.$$.fragment,T),Gg=a(T),p(ws.$$.fragment,T),Vg=c(T,`
最後回上一步再進入安裝介面，即成功進入安裝介面
`),p(Ss.$$.fragment,T),T.forEach(t),fm=a(e),Ct=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Ct)!=="svelte-q8cz0z"&&(Ct.innerHTML=Iu),dm=a(e),wt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(wt)!=="svelte-hyguy8"&&(wt.innerHTML=Uu),um=a(e),ks=u(e,"P",{});var fd=C(ks);Jg=c(fd,`到 Active Directory Users and Computers -> New -> Organizational Unit
`),p(Ps.$$.fragment,fd),fd.forEach(t),hm=a(e),St=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(St)!=="svelte-16gpp74"&&(St.innerHTML=Wu),cm=a(e),G=u(e,"P",{});var ce=C(G);jg=c(ce,`直接將 OU 刪除的話，會遇到這個錯誤：
`),p(Hs.$$.fragment,ce),qg=c(ce,`
若要刪除 OU 需先設定：
Step 1. 將目標網域右鍵 -> View -> 點選 Advanced Features
`),p(Ts.$$.fragment,ce),Kg=c(ce,`
Step 2. 到想要刪除的 OU 右鍵 -> Properties -> Object -> 將 Project object from accidental deletion 取消勾選 -> OK
`),p(xs.$$.fragment,ce),zg=a(ce),p(ys.$$.fragment,ce),Qg=c(ce,`
刪除時就不會出現錯誤了`),ce.forEach(t),_m=a(e),kt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(kt)!=="svelte-1czxb0u"&&(kt.innerHTML=Bu),vm=a(e),Te=u(e,"P",{});var Dl=C(Te);Xg=c(Dl,`不要使用掛載後的硬碟路徑，直接使用其網路路徑
`),p(Ms.$$.fragment,Dl),Zg=a(Dl),p(As.$$.fragment,Dl),Dl.forEach(t),Cm=a(e),Pt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Pt)!=="svelte-7oo0vn"&&(Pt.innerHTML=Gu),wm=a(e),Ht=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ht)!=="svelte-1mwadu8"&&(Ht.innerHTML=Vu),Sm=a(e),O=u(e,"P",{});var Q=C(O);Yg=c(Q,"打開 "),_a=u(Q,"CODE",{"data-svelte-h":!0}),_(_a)!=="svelte-suufxd"&&(_a.textContent=Ju),ef=c(Q,`
將這三個檔案複製到 `),va=u(Q,"CODE",{"data-svelte-h":!0}),_(va)!=="svelte-tcc0k4"&&(va.textContent=ju),tf=a(Q),p(Ls.$$.fragment,Q),nf=a(Q),p(Es.$$.fragment,Q),rf=c(Q,`
再回到 admx 資料夾，選擇當下系統的語系
(若英文就是 en-US，中文就是 zh-TW，這裡的系統是 en-US)
複製裡面全部的檔案到 `),Ca=u(Q,"CODE",{"data-svelte-h":!0}),_(Ca)!=="svelte-mtg0qu"&&(Ca.textContent=qu),sf=a(Q),p(Ds.$$.fragment,Q),Q.forEach(t),km=a(e),Tt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Tt)!=="svelte-1kh5iod"&&(Tt.innerHTML=Ku),Pm=a(e),V=u(e,"P",{});var _e=C(V);af=c(_e,"執行指令 "),wa=u(_e,"CODE",{"data-svelte-h":!0}),_(wa)!=="svelte-1fy3f7c"&&(wa.textContent=zu),lf=c(_e,"，再開啟 "),Sa=u(_e,"CODE",{"data-svelte-h":!0}),_(Sa)!=="svelte-hhbks"&&(Sa.textContent=Qu),pf=c(_e,` 或 Group Policy Management，在 Computer Configuration -> Administrative Templates 下即可看到四個新的與 Edge 相關的 Policy 設定
`),p(Rs.$$.fragment,_e),mf=a(_e),p(bs.$$.fragment,_e),of=c(_e,`
註：若 Client 端未安裝 ADMX 也可以套用規則`),_e.forEach(t),Hm=a(e),xt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(xt)!=="svelte-og2ker"&&(xt.innerHTML=Xu),Tm=a(e),yt=u(e,"UL",{});var co=C(yt);ka=u(co,"LI",{});var dd=C(ka);$f=c(dd,`Setting
`),p(Ns.$$.fragment,dd),dd.forEach(t),gf=a(co),Pa=u(co,"LI",{});var ud=C(Pa);ff=c(ud,`Effect
`),p(Fs.$$.fragment,ud),ud.forEach(t),co.forEach(t),xm=a(e),Mt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Mt)!=="svelte-g9wrhy"&&(Mt.innerHTML=Zu),ym=a(e),At=u(e,"UL",{});var _o=C(At);Ha=u(_o,"LI",{});var hd=C(Ha);df=c(hd,`EN
`),p(Os.$$.fragment,hd),hd.forEach(t),uf=a(_o),Ta=u(_o,"LI",{});var cd=C(Ta);hf=c(cd,`ZH_TW
`),p(Is.$$.fragment,cd),cd.forEach(t),_o.forEach(t),Mm=a(e),Lt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Lt)!=="svelte-1qtyf9r"&&(Lt.innerHTML=Yu),Am=a(e),xa=u(e,"P",{});var Ph=C(xa);p(Us.$$.fragment,Ph),Ph.forEach(t),Lm=a(e),Et=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Et)!=="svelte-tlhvv4"&&(Et.innerHTML=eh),Em=a(e),Dt=u(e,"UL",{});var vo=C(Dt);Rt=u(vo,"LI",{});var Rl=C(Rt);cf=c(Rl,`Setting
`),p(Ws.$$.fragment,Rl),_f=a(Rl),p(Bs.$$.fragment,Rl),Rl.forEach(t),vf=a(vo),ya=u(vo,"LI",{});var _d=C(ya);Cf=c(_d,`Effect
`),p(Gs.$$.fragment,_d),_d.forEach(t),vo.forEach(t),Dm=a(e),bt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(bt)!=="svelte-1s5aqjk"&&(bt.innerHTML=th),Rm=a(e),Vs=u(e,"P",{});var vd=C(Vs);wf=c(vd,`打開 AD AC，到 domain (local) -> System -> Password Settings Container -> 右鍵 Password Settings
`),p(Js.$$.fragment,vd),vd.forEach(t),bm=a(e),gl=A(e,!1),fl=a(e),D=u(e,"P",{});var U=C(D);p(js.$$.fragment,U),Sf=c(U,`
回到 Users -> 選擇自己要套用設定的使用者或群組 -> 右鍵 Properties -> Password Settings -> Assign…
`),p(qs.$$.fragment,U),kf=c(U,`
選 Advenced…
`),p(Ks.$$.fragment,U),Pf=c(U,`
選 Find Now -> 選擇自己建立的規則
`),p(zs.$$.fragment,U),Hf=c(U,`
若新輸入的密碼不到 8 個字：
`),p(Qs.$$.fragment,U),Tf=a(U),p(Xs.$$.fragment,U),xf=c(U,`
若有至少 8 個字：
`),p(Zs.$$.fragment,U),yf=a(U),p(Ys.$$.fragment,U),U.forEach(t),Nm=a(e),Nt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Nt)!=="svelte-1oy4yin"&&(Nt.innerHTML=nh),Fm=a(e),L=u(e,"P",{});var I=C(L);Mf=c(I,`安裝服務：
`),p(ei.$$.fragment,I),Af=a(I),p(ti.$$.fragment,I),Lf=a(I),p(ni.$$.fragment,I),Ef=c(I,`
使用 Internet Explorer 可瀏覽其 RDWeb (在沒有 SSL 簽證的狀況下)：
`),p(ri.$$.fragment,I),Df=a(I),p(si.$$.fragment,I),Rf=c(I,`
也可透過網域使用者直接遠端 Server：
`),p(ii.$$.fragment,I),bf=a(I),p(ai.$$.fragment,I),Nf=c(I,`
若簽證了可使用 Edge 正常預覽：
`),p(li.$$.fragment,I),I.forEach(t),Om=a(e),Ft=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Ft)!=="svelte-1y6z8ga"&&(Ft.innerHTML=rh),Im=a(e),xe=u(e,"P",{});var bl=C(xe);Ff=c(bl,`按一下 Windows Key + R，輸入 regedit 後 Enter
設定「`),Ma=u(bl,"STRONG",{"data-svelte-h":!0}),_(Ma)!=="svelte-1y8ohbs"&&(Ma.textContent=sh),Of=c(bl,`」為 1
`),p(pi.$$.fragment,bl),bl.forEach(t),Um=a(e),Ot=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Ot)!=="svelte-1jha5cb"&&(Ot.innerHTML=ih),Wm=a(e),mi=u(e,"P",{"data-svelte-h":!0}),_(mi)!=="svelte-kr75hh"&&(mi.innerHTML=ah),Bm=a(e),oi=u(e,"UL",{"data-svelte-h":!0}),_(oi)!=="svelte-prcz8d"&&(oi.innerHTML=lh),Gm=a(e),dl=A(e,!1),ul=a(e),It=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(It)!=="svelte-wp48zq"&&(It.innerHTML=ph),Vm=a(e),pe=u(e,"P",{});var qi=C(pe);If=c(qi,`先到已安裝 Main CA 的 Server，打開 Certification Authority -> 點選 Server 後右鍵 Properties
`),p($i.$$.fragment,qi),Uf=c(qi,`
點選 Extensions -> Select extension 選擇 CDP -> 點選 http 開頭的項目 -> 勾選第三跟第四個選項
`),p(gi.$$.fragment,qi),Wf=c(qi,`
Select extension 換選擇 AIA -> 點選 http 開頭的項目 -> 勾選第一個選項 -> 點擊 Apply
`),p(fi.$$.fragment,qi),qi.forEach(t),Jm=a(e),ye=u(e,"P",{});var Nl=C(ye);Bf=c(Nl,`接著轉到需要安裝 Sub CA 的 Server，打開 Certification Authority -> 點選 Server 後右鍵 All Tasks -> Renew CA Certificate…
`),p(di.$$.fragment,Nl),Gf=c(Nl,`
確認 Computer Name 跟 Parent CA 都正確後，點擊 OK
`),p(ui.$$.fragment,Nl),Nl.forEach(t),jm=a(e),me=u(e,"P",{});var Ki=C(me);Vf=c(Ki,`回到 Main CA Server -> Pending Requests -> Issue 從 Sub CA 發起的請求
`),p(hi.$$.fragment,Ki),Jf=c(Ki,`
Issued Certidicates -> 選擇剛剛 Issue 的 CA -> Details -> Copy to File…
`),p(ci.$$.fragment,Ki),jf=c(Ki,`
選擇 DER encoded 的 X.509 -> Next -> 儲存於自己指定的位置 -> 複製到 Sub CA Server
`),p(_i.$$.fragment,Ki),Ki.forEach(t),qm=a(e),de=u(e,"P",{});var Na=C(de);qf=c(Na,`再回到 Sub CA Server，點選 Server 後右鍵 All Tasks -> Install CA Certificate…
`),p(vi.$$.fragment,Na),Kf=c(Na,`
右下角選擇 X.509 類型的 CA -> 選擇剛剛簽好的 CA
`),p(Ci.$$.fragment,Na),zf=c(Na,`
安裝好後，Sub CA Server 圖標會有綠色勾勾，代表正常運作`),Na.forEach(t),Km=a(e),Ut=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ut)!=="svelte-1k9tv90"&&(Ut.innerHTML=mh),zm=a(e),ue=u(e,"P",{});var Fa=C(ue);p(wi.$$.fragment,Fa),Qf=c(Fa,`
此錯誤為無法從 Root CA 的 CRL 發布點下載撤銷憑證名單，可先嘗試透過在 hosts 內增加對 Root CA Server 的記錄 (可能需要執行 `),Aa=u(Fa,"CODE",{"data-svelte-h":!0}),_(Aa)!=="svelte-14xu26v"&&(Aa.textContent=oh),Xf=c(Fa,` 保證系統會透過 hosts 內的記錄找尋)
`),p(Si.$$.fragment,Fa),Fa.forEach(t),Qm=a(e),ki=u(e,"P",{"data-svelte-h":!0}),_(ki)!=="svelte-vx6mvu"&&(ki.textContent=$h),Xm=a(e),hl=A(e,!1),cl=a(e),Wt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Wt)!=="svelte-63oksh"&&(Wt.innerHTML=gh),Zm=a(e),Bt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Bt)!=="svelte-1440nko"&&(Bt.innerHTML=fh),Ym=a(e),Pi=u(e,"P",{});var Cd=C(Pi);Zf=c(Cd,`打開 Server Manager -> File and Storage Services -> Storage Pools -> 右鍵 -> New Storage Pool…
`),p(Hi.$$.fragment,Cd),Cd.forEach(t),eo=a(e),Gt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(Gt)!=="svelte-1uwjf7o"&&(Gt.innerHTML=dh),to=a(e),La=u(e,"P",{});var Hh=C(La);p(Ti.$$.fragment,Hh),Hh.forEach(t),no=a(e),_l=A(e,!1),vl=a(e),Cl=A(e,!1),wl=a(e),N=u(e,"P",{});var J=C(N);Yf=c(J,`找到 Disk Management
`),p(xi.$$.fragment,J),ed=c(J,`
對剛建立的虛擬硬碟右鍵選擇 Online -> Initialize Disk
`),p(yi.$$.fragment,J),p(Mi.$$.fragment,J),td=c(J,`
選擇 GPT 分區
`),p(Ai.$$.fragment,J),nd=c(J,`
選擇磁區右鍵選擇 New Simple Volume…
`),p(Li.$$.fragment,J),rd=c(J,`
建立完成
`),p(Ei.$$.fragment,J),sd=a(J),p(Di.$$.fragment,J),J.forEach(t),ro=a(e),Vt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Vt)!=="svelte-1pc4ego"&&(Vt.innerHTML=uh),so=a(e),ne=u(e,"P",{});var Xt=C(ne);id=c(Xt,`安裝 Data Deduplication
`),p(Ri.$$.fragment,Xt),ad=c(Xt,`
File and Storage Services -> Volumes -> 選中要設定的磁區 -> Configure Data Deduplication
`),p(bi.$$.fragment,Xt),ld=c(Xt,`
選擇 General purpose file server
`),p(Ni.$$.fragment,Xt),pd=c(Xt,`
再按 OK 就完成了`),Xt.forEach(t),io=a(e),Jt=u(e,"H2",{id:!0,"data-svelte-h":!0}),_(Jt)!=="svelte-1qrgot5"&&(Jt.innerHTML=hh),ao=a(e),jt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(jt)!=="svelte-1lnex7b"&&(jt.innerHTML=ch),lo=a(e),Fi=u(e,"P",{"data-svelte-h":!0}),_(Fi)!=="svelte-lnkgxb"&&(Fi.textContent=_h),po=a(e),Sl=A(e,!1),kl=a(e),Oi=u(e,"P",{"data-svelte-h":!0}),_(Oi)!=="svelte-ld6jlm"&&(Oi.textContent=vh),mo=a(e),Pl=A(e,!1),Hl=a(e),Ea=u(e,"P",{});var Th=C(Ea);p(Ii.$$.fragment,Th),Th.forEach(t),oo=a(e),qt=u(e,"H3",{id:!0,"data-svelte-h":!0}),_(qt)!=="svelte-1bng4yu"&&(qt.innerHTML=Ch),$o=a(e),Ui=u(e,"P",{"data-svelte-h":!0}),_(Ui)!=="svelte-11yjwvz"&&(Ui.innerHTML=wh),go=a(e),Tl=A(e,!1),xl=a(e),Da=u(e,"P",{});var xh=C(Da);p(Wi.$$.fragment,xh),xh.forEach(t),this.h()},h(){v(x,"id","gpo-相關設定"),v(X,"id","初次登錄動畫關閉"),v(Ee,"id","禁止存取控制台設定"),v(De,"id","限制或禁止使用者使用特定應用程式"),v(Re,"id","設定在-logon-ui-看不到上個登入的使用者"),v(be,"id","登入時自動掛載共享資料夾"),Oa.a=Ia,v(Ne,"id","若共享資料夾有跨網域"),Ua.a=Wa,v(Fe,"id","讓-windows-server-也能掛載-debian-smbd"),v(Oe,"id","gpo-個別使用者套用規則"),v(Ie,"id","開機時自動跳出訊息"),v(Ue,"id","禁止使用-windows-update"),v(We,"id","登入時自動將檔案複製到桌面"),Ba.a=Ga,v(Be,"id","用指令載入登錄檔"),Va.a=Ja,v(Ge,"id","dns"),v(Ve,"id","dns-快取紀錄關閉"),v(Je,"id","dns-同步"),ja.a=qa,v(je,"id","通知-notify"),v(qe,"id","start-of-authority-record-soa"),v(Ke,"id","conditional-forwarders"),Ka.a=za,v(Qe,"id","使用者設定-cmd--for-loop"),Qa.a=Xa,v(Xe,"id","進階使用者設定-powershell--for-loop"),v(Ze,"id","set-aduser"),Za.a=Ya,v(Ye,"id","dsmod"),el.a=tl,nl.a=rl,sl.a=il,v(tt,"id","群組設定-cmd--for-loop"),al.a=ll,v(nt,"id","一次允許多個可使用遠端桌面的使用者"),pl.a=ml,v(rt,"id","允許-icmp-協議"),v(st,"id","讓網域內電腦自動信任-ca-憑證"),v(it,"id","允許自動信任設定"),v(at,"id","設定自動信任的電腦"),v(lt,"id","共享資料夾管理-file-server-resource-manager"),v(pt,"id","限制共享資料夾空間"),v(mt,"id","限制共享資料夾存放檔案類型"),v(ot,"id","快速啟動網路介面控制"),v($t,"id","更改-remote-desktop-的-tcp-port-登錄檔修改"),v(gt,"id","dhcp-server-位址保留"),v(ft,"id","vpn-設定"),v(dt,"id","sstp-設定"),v(ut,"id","有-web-server--https"),ol.a=$l,v(ht,"id","radius-驗證伺服器"),v(ct,"id","讓外部電腦信任根憑證-root-ca"),v(_t,"id","windows-11"),v(vt,"id","安裝跳過-tpmcpu-和-secure-boot-檢查"),v(Ct,"id","organizational-unit-ou"),v(wt,"id","新增"),v(St,"id","刪除"),v(kt,"id","當-iis-有使用到網路資源的設定"),v(Pt,"id","edge-group-policy-templates-admx-54-分區可能出"),v(Ht,"id","安裝"),v(Tt,"id","套用更新"),v(xt,"id","封鎖衝浪遊戲-surf-game"),v(Mt,"id","啟動首頁和新索引標籤頁面-startup-home-page-and-new-tab-page"),v(Lt,"id","允許或拒絕網頁截取螢幕畫面-allow-or-deny-screen-capture"),v(Et,"id","拒絕存取特定網站-block-access-to-a-list-of-urls"),v(bt,"id","對單個使用者或群組做密碼限制-ad-ac"),gl.a=fl,v(Nt,"id","遠端桌面服務-remote-desktop-service"),v(Ft,"id","啟用-ip-forwarding-regedit"),v(Ot,"id","啟用-ntp-server-windows-server"),dl.a=ul,v(It,"id","次級憑證的簽證及安裝-sub-ca"),v(Ut,"id","error-the-revocation-function-was-unable-to-check-revocation-because-the-revocation-server-was-offline"),hl.a=cl,v(Wt,"id","透過-powershell-建立-raid"),v(Bt,"id","建立-storage-pool"),v(Gt,"id","建立-raid-磁區"),_l.a=vl,Cl.a=wl,v(Vt,"id","啟用重複資料刪除機制"),v(Jt,"id","ad-users-csv-import--export"),v(jt,"id","csvde-import-無法使用"),Sl.a=kl,Pl.a=Hl,v(qt,"id","powershell-import-users"),Tl.a=xl},m(e,n){r(e,x,n),r(e,oe,n),r(e,X,n),r(e,Z,n),r(e,$e,n),r(e,Fl,n),r(e,Ee,n),r(e,Ol,n),r(e,Ce,n),s(Ce,Co),s(Ce,Qi),s(Ce,wo),m(Zt,Ce,null),r(e,Il,n),r(e,De,n),r(e,Ul,n),r(e,re,n),s(re,So),m(Yt,re,null),s(re,ko),s(re,Xi),s(re,Po),m(en,re,null),r(e,Wl,n),r(e,Re,n),r(e,Bl,n),r(e,we,n),s(we,Ho),s(we,Zi),s(we,To),m(tn,we,null),r(e,Gl,n),r(e,be,n),r(e,Vl,n),r(e,nn,n),r(e,Jl,n),Oa.m(Lh,e,n),r(e,Ia,n),r(e,ge,n),s(ge,xo),m(rn,ge,null),s(ge,yo),m(sn,ge,null),s(ge,Mo),r(e,jl,n),r(e,Ne,n),r(e,ql,n),r(e,an,n),r(e,Kl,n),Ua.m(Eh,e,n),r(e,Wa,n),r(e,Fe,n),r(e,zl,n),r(e,Se,n),s(Se,Ao),s(Se,Yi),s(Se,Lo),m(ln,Se,null),r(e,Ql,n),r(e,Oe,n),r(e,Xl,n),r(e,pn,n),s(pn,Eo),m(mn,pn,null),r(e,Zl,n),r(e,Ie,n),r(e,Yl,n),r(e,j,n),s(j,Do),m(on,j,null),s(j,Ro),m($n,j,null),s(j,bo),m(gn,j,null),s(j,No),m(fn,j,null),r(e,ep,n),r(e,Ue,n),r(e,tp,n),r(e,se,n),s(se,Fo),s(se,ea),s(se,Oo),m(dn,se,null),s(se,Io),m(un,se,null),r(e,np,n),r(e,We,n),r(e,rp,n),Ba.m(Dh,e,n),r(e,Ga,n),r(e,hn,n),r(e,sp,n),r(e,Be,n),r(e,ip,n),r(e,ke,n),s(ke,Uo),s(ke,ta),s(ke,Wo),m(cn,ke,null),r(e,ap,n),Va.m(Rh,e,n),r(e,Ja,n),r(e,_n,n),r(e,lp,n),r(e,Ge,n),r(e,pp,n),r(e,Ve,n),r(e,mp,n),r(e,vn,n),r(e,op,n),r(e,Je,n),r(e,$p,n),ja.m(bh,e,n),r(e,qa,n),r(e,Y,n),s(Y,Bo),m(Cn,Y,null),s(Y,Go),m(wn,Y,null),s(Y,Vo),m(Sn,Y,null),s(Y,Jo),r(e,gp,n),r(e,kn,n),r(e,fp,n),r(e,je,n),r(e,dp,n),r(e,Pe,n),s(Pe,jo),m(Pn,Pe,null),s(Pe,qo),m(Hn,Pe,null),r(e,up,n),r(e,qe,n),r(e,hp,n),r(e,Tn,n),m(xn,Tn,null),s(Tn,Ko),r(e,cp,n),r(e,Ke,n),r(e,_p,n),r(e,fe,n),s(fe,zo),m(yn,fe,null),s(fe,Qo),m(Mn,fe,null),s(fe,Xo),r(e,vp,n),Ka.m(Nh,e,n),r(e,za,n),r(e,ze,n),m(An,ze,null),s(ze,Zo),m(Ln,ze,null),r(e,Cp,n),r(e,Qe,n),r(e,wp,n),Qa.m(Fh,e,n),r(e,Xa,n),r(e,Xe,n),r(e,Sp,n),r(e,Ze,n),r(e,kp,n),r(e,En,n),r(e,Pp,n),Za.m(Oh,e,n),r(e,Ya,n),r(e,na,n),m(Dn,na,null),r(e,Hp,n),r(e,Rn,n),s(Rn,Yo),m(bn,Rn,null),r(e,Tp,n),r(e,Ye,n),r(e,xp,n),r(e,Nn,n),r(e,yp,n),el.m(Ih,e,n),r(e,tl,n),r(e,ra,n),m(Fn,ra,null),r(e,Mp,n),nl.m(Uh,e,n),r(e,rl,n),sl.m(Wh,e,n),r(e,il,n),r(e,et,n),m(On,et,null),s(et,e$),m(In,et,null),r(e,Ap,n),r(e,tt,n),r(e,Lp,n),r(e,Un,n),r(e,Ep,n),al.m(Bh,e,n),r(e,ll,n),r(e,Wn,n),r(e,Dp,n),r(e,nt,n),r(e,Rp,n),pl.m(Gh,e,n),r(e,ml,n),r(e,rt,n),r(e,bp,n),r(e,y,n),s(y,t$),m(Bn,y,null),s(y,n$),m(Gn,y,null),s(y,r$),m(Vn,y,null),s(y,s$),m(Jn,y,null),s(y,i$),m(jn,y,null),s(y,a$),m(qn,y,null),s(y,l$),m(Kn,y,null),s(y,p$),m(zn,y,null),s(y,m$),m(Qn,y,null),s(y,o$),m(Xn,y,null),r(e,Np,n),r(e,st,n),r(e,Fp,n),r(e,it,n),r(e,Op,n),r(e,ie,n),s(ie,$$),m(Zn,ie,null),s(ie,g$),s(ie,sa),s(ie,f$),m(Yn,ie,null),r(e,Ip,n),r(e,at,n),r(e,Up,n),r(e,F,n),s(F,d$),m(er,F,null),s(F,u$),m(tr,F,null),s(F,h$),m(nr,F,null),s(F,c$),m(rr,F,null),s(F,_$),s(F,ia),s(F,v$),m(sr,F,null),r(e,Wp,n),r(e,lt,n),r(e,Bp,n),r(e,ir,n),s(ir,C$),m(ar,ir,null),r(e,Gp,n),r(e,pt,n),r(e,Vp,n),r(e,ae,n),s(ae,w$),m(lr,ae,null),s(ae,S$),m(pr,ae,null),s(ae,k$),m(mr,ae,null),r(e,Jp,n),r(e,mt,n),r(e,jp,n),r(e,ee,n),s(ee,aa),s(ee,P$),m(or,ee,null),s(ee,H$),m($r,ee,null),s(ee,T$),m(gr,ee,null),r(e,qp,n),r(e,B,n),s(B,la),s(B,x$),m(fr,B,null),s(B,y$),m(dr,B,null),s(B,M$),s(B,pa),s(B,A$),m(ur,B,null),r(e,Kp,n),r(e,te,n),s(te,ma),s(te,L$),m(hr,te,null),s(te,E$),m(cr,te,null),s(te,D$),m(_r,te,null),r(e,zp,n),r(e,ot,n),r(e,Qp,n),r(e,He,n),s(He,R$),m(vr,He,null),s(He,b$),m(Cr,He,null),r(e,Xp,n),r(e,$t,n),r(e,Zp,n),r(e,le,n),s(le,N$),s(le,oa),s(le,F$),s(le,$a),s(le,O$),m(wr,le,null),r(e,Yp,n),r(e,gt,n),r(e,em,n),r(e,q,n),s(q,I$),m(Sr,q,null),s(q,U$),m(kr,q,null),s(q,W$),s(q,ga),s(q,B$),m(Pr,q,null),r(e,tm,n),r(e,ft,n),r(e,nm,n),r(e,w,n),s(w,G$),m(Hr,w,null),s(w,V$),m(Tr,w,null),s(w,J$),m(xr,w,null),s(w,j$),m(yr,w,null),s(w,q$),m(Mr,w,null),s(w,K$),m(Ar,w,null),s(w,z$),m(Lr,w,null),s(w,Q$),m(Er,w,null),s(w,X$),m(Dr,w,null),s(w,Z$),m(Rr,w,null),s(w,Y$),m(br,w,null),s(w,eg),m(Nr,w,null),s(w,tg),m(Fr,w,null),s(w,ng),m(Or,w,null),s(w,rg),m(Ir,w,null),s(w,sg),m(Ur,w,null),s(w,ig),m(Wr,w,null),r(e,rm,n),r(e,dt,n),r(e,sm,n),r(e,ut,n),r(e,im,n),r(e,K,n),s(K,ag),m(Br,K,null),s(K,lg),m(Gr,K,null),s(K,pg),m(Vr,K,null),s(K,mg),m(Jr,K,null),r(e,am,n),ol.m(Vh,e,n),r(e,$l,n),r(e,ht,n),r(e,lm,n),r(e,S,n),s(S,og),m(jr,S,null),s(S,$g),m(qr,S,null),s(S,gg),m(Kr,S,null),s(S,fg),m(zr,S,null),s(S,dg),m(Qr,S,null),s(S,ug),m(Xr,S,null),s(S,hg),m(Zr,S,null),s(S,cg),m(Yr,S,null),s(S,_g),m(es,S,null),s(S,vg),m(ts,S,null),s(S,Cg),m(ns,S,null),s(S,wg),m(rs,S,null),s(S,Sg),m(ss,S,null),s(S,kg),m(is,S,null),s(S,Pg),m(as,S,null),r(e,pm,n),r(e,ct,n),r(e,mm,n),r(e,b,n),s(b,Hg),m(ls,b,null),s(b,Tg),m(ps,b,null),s(b,xg),m(ms,b,null),s(b,yg),m(os,b,null),s(b,Mg),m($s,b,null),s(b,Ag),m(gs,b,null),s(b,Lg),m(fs,b,null),r(e,om,n),r(e,_t,n),r(e,$m,n),r(e,vt,n),r(e,gm,n),r(e,P,n),m(ds,P,null),s(P,Eg),m(us,P,null),s(P,Dg),s(P,fa),s(P,Rg),m(hs,P,null),s(P,bg),m(cs,P,null),s(P,Ng),s(P,da),s(P,Fg),s(P,ua),s(P,Og),s(P,ha),s(P,Ig),s(P,ca),s(P,Ug),m(_s,P,null),s(P,Wg),m(vs,P,null),s(P,Bg),m(Cs,P,null),s(P,Gg),m(ws,P,null),s(P,Vg),m(Ss,P,null),r(e,fm,n),r(e,Ct,n),r(e,dm,n),r(e,wt,n),r(e,um,n),r(e,ks,n),s(ks,Jg),m(Ps,ks,null),r(e,hm,n),r(e,St,n),r(e,cm,n),r(e,G,n),s(G,jg),m(Hs,G,null),s(G,qg),m(Ts,G,null),s(G,Kg),m(xs,G,null),s(G,zg),m(ys,G,null),s(G,Qg),r(e,_m,n),r(e,kt,n),r(e,vm,n),r(e,Te,n),s(Te,Xg),m(Ms,Te,null),s(Te,Zg),m(As,Te,null),r(e,Cm,n),r(e,Pt,n),r(e,wm,n),r(e,Ht,n),r(e,Sm,n),r(e,O,n),s(O,Yg),s(O,_a),s(O,ef),s(O,va),s(O,tf),m(Ls,O,null),s(O,nf),m(Es,O,null),s(O,rf),s(O,Ca),s(O,sf),m(Ds,O,null),r(e,km,n),r(e,Tt,n),r(e,Pm,n),r(e,V,n),s(V,af),s(V,wa),s(V,lf),s(V,Sa),s(V,pf),m(Rs,V,null),s(V,mf),m(bs,V,null),s(V,of),r(e,Hm,n),r(e,xt,n),r(e,Tm,n),r(e,yt,n),s(yt,ka),s(ka,$f),m(Ns,ka,null),s(yt,gf),s(yt,Pa),s(Pa,ff),m(Fs,Pa,null),r(e,xm,n),r(e,Mt,n),r(e,ym,n),r(e,At,n),s(At,Ha),s(Ha,df),m(Os,Ha,null),s(At,uf),s(At,Ta),s(Ta,hf),m(Is,Ta,null),r(e,Mm,n),r(e,Lt,n),r(e,Am,n),r(e,xa,n),m(Us,xa,null),r(e,Lm,n),r(e,Et,n),r(e,Em,n),r(e,Dt,n),s(Dt,Rt),s(Rt,cf),m(Ws,Rt,null),s(Rt,_f),m(Bs,Rt,null),s(Dt,vf),s(Dt,ya),s(ya,Cf),m(Gs,ya,null),r(e,Dm,n),r(e,bt,n),r(e,Rm,n),r(e,Vs,n),s(Vs,wf),m(Js,Vs,null),r(e,bm,n),gl.m(Jh,e,n),r(e,fl,n),r(e,D,n),m(js,D,null),s(D,Sf),m(qs,D,null),s(D,kf),m(Ks,D,null),s(D,Pf),m(zs,D,null),s(D,Hf),m(Qs,D,null),s(D,Tf),m(Xs,D,null),s(D,xf),m(Zs,D,null),s(D,yf),m(Ys,D,null),r(e,Nm,n),r(e,Nt,n),r(e,Fm,n),r(e,L,n),s(L,Mf),m(ei,L,null),s(L,Af),m(ti,L,null),s(L,Lf),m(ni,L,null),s(L,Ef),m(ri,L,null),s(L,Df),m(si,L,null),s(L,Rf),m(ii,L,null),s(L,bf),m(ai,L,null),s(L,Nf),m(li,L,null),r(e,Om,n),r(e,Ft,n),r(e,Im,n),r(e,xe,n),s(xe,Ff),s(xe,Ma),s(xe,Of),m(pi,xe,null),r(e,Um,n),r(e,Ot,n),r(e,Wm,n),r(e,mi,n),r(e,Bm,n),r(e,oi,n),r(e,Gm,n),dl.m(jh,e,n),r(e,ul,n),r(e,It,n),r(e,Vm,n),r(e,pe,n),s(pe,If),m($i,pe,null),s(pe,Uf),m(gi,pe,null),s(pe,Wf),m(fi,pe,null),r(e,Jm,n),r(e,ye,n),s(ye,Bf),m(di,ye,null),s(ye,Gf),m(ui,ye,null),r(e,jm,n),r(e,me,n),s(me,Vf),m(hi,me,null),s(me,Jf),m(ci,me,null),s(me,jf),m(_i,me,null),r(e,qm,n),r(e,de,n),s(de,qf),m(vi,de,null),s(de,Kf),m(Ci,de,null),s(de,zf),r(e,Km,n),r(e,Ut,n),r(e,zm,n),r(e,ue,n),m(wi,ue,null),s(ue,Qf),s(ue,Aa),s(ue,Xf),m(Si,ue,null),r(e,Qm,n),r(e,ki,n),r(e,Xm,n),hl.m(qh,e,n),r(e,cl,n),r(e,Wt,n),r(e,Zm,n),r(e,Bt,n),r(e,Ym,n),r(e,Pi,n),s(Pi,Zf),m(Hi,Pi,null),r(e,eo,n),r(e,Gt,n),r(e,to,n),r(e,La,n),m(Ti,La,null),r(e,no,n),_l.m(Kh,e,n),r(e,vl,n),Cl.m(zh,e,n),r(e,wl,n),r(e,N,n),s(N,Yf),m(xi,N,null),s(N,ed),m(yi,N,null),m(Mi,N,null),s(N,td),m(Ai,N,null),s(N,nd),m(Li,N,null),s(N,rd),m(Ei,N,null),s(N,sd),m(Di,N,null),r(e,ro,n),r(e,Vt,n),r(e,so,n),r(e,ne,n),s(ne,id),m(Ri,ne,null),s(ne,ad),m(bi,ne,null),s(ne,ld),m(Ni,ne,null),s(ne,pd),r(e,io,n),r(e,Jt,n),r(e,ao,n),r(e,jt,n),r(e,lo,n),r(e,Fi,n),r(e,po,n),Sl.m(Qh,e,n),r(e,kl,n),r(e,Oi,n),r(e,mo,n),Pl.m(Xh,e,n),r(e,Hl,n),r(e,Ea,n),m(Ii,Ea,null),r(e,oo,n),r(e,qt,n),r(e,$o,n),r(e,Ui,n),r(e,go,n),Tl.m(Zh,e,n),r(e,xl,n),r(e,Da,n),m(Wi,Da,null),fo=!0},p:ec,i(e){fo||(o(Zt.$$.fragment,e),o(Yt.$$.fragment,e),o(en.$$.fragment,e),o(tn.$$.fragment,e),o(rn.$$.fragment,e),o(sn.$$.fragment,e),o(ln.$$.fragment,e),o(mn.$$.fragment,e),o(on.$$.fragment,e),o($n.$$.fragment,e),o(gn.$$.fragment,e),o(fn.$$.fragment,e),o(dn.$$.fragment,e),o(un.$$.fragment,e),o(cn.$$.fragment,e),o(Cn.$$.fragment,e),o(wn.$$.fragment,e),o(Sn.$$.fragment,e),o(Pn.$$.fragment,e),o(Hn.$$.fragment,e),o(xn.$$.fragment,e),o(yn.$$.fragment,e),o(Mn.$$.fragment,e),o(An.$$.fragment,e),o(Ln.$$.fragment,e),o(Dn.$$.fragment,e),o(bn.$$.fragment,e),o(Fn.$$.fragment,e),o(On.$$.fragment,e),o(In.$$.fragment,e),o(Bn.$$.fragment,e),o(Gn.$$.fragment,e),o(Vn.$$.fragment,e),o(Jn.$$.fragment,e),o(jn.$$.fragment,e),o(qn.$$.fragment,e),o(Kn.$$.fragment,e),o(zn.$$.fragment,e),o(Qn.$$.fragment,e),o(Xn.$$.fragment,e),o(Zn.$$.fragment,e),o(Yn.$$.fragment,e),o(er.$$.fragment,e),o(tr.$$.fragment,e),o(nr.$$.fragment,e),o(rr.$$.fragment,e),o(sr.$$.fragment,e),o(ar.$$.fragment,e),o(lr.$$.fragment,e),o(pr.$$.fragment,e),o(mr.$$.fragment,e),o(or.$$.fragment,e),o($r.$$.fragment,e),o(gr.$$.fragment,e),o(fr.$$.fragment,e),o(dr.$$.fragment,e),o(ur.$$.fragment,e),o(hr.$$.fragment,e),o(cr.$$.fragment,e),o(_r.$$.fragment,e),o(vr.$$.fragment,e),o(Cr.$$.fragment,e),o(wr.$$.fragment,e),o(Sr.$$.fragment,e),o(kr.$$.fragment,e),o(Pr.$$.fragment,e),o(Hr.$$.fragment,e),o(Tr.$$.fragment,e),o(xr.$$.fragment,e),o(yr.$$.fragment,e),o(Mr.$$.fragment,e),o(Ar.$$.fragment,e),o(Lr.$$.fragment,e),o(Er.$$.fragment,e),o(Dr.$$.fragment,e),o(Rr.$$.fragment,e),o(br.$$.fragment,e),o(Nr.$$.fragment,e),o(Fr.$$.fragment,e),o(Or.$$.fragment,e),o(Ir.$$.fragment,e),o(Ur.$$.fragment,e),o(Wr.$$.fragment,e),o(Br.$$.fragment,e),o(Gr.$$.fragment,e),o(Vr.$$.fragment,e),o(Jr.$$.fragment,e),o(jr.$$.fragment,e),o(qr.$$.fragment,e),o(Kr.$$.fragment,e),o(zr.$$.fragment,e),o(Qr.$$.fragment,e),o(Xr.$$.fragment,e),o(Zr.$$.fragment,e),o(Yr.$$.fragment,e),o(es.$$.fragment,e),o(ts.$$.fragment,e),o(ns.$$.fragment,e),o(rs.$$.fragment,e),o(ss.$$.fragment,e),o(is.$$.fragment,e),o(as.$$.fragment,e),o(ls.$$.fragment,e),o(ps.$$.fragment,e),o(ms.$$.fragment,e),o(os.$$.fragment,e),o($s.$$.fragment,e),o(gs.$$.fragment,e),o(fs.$$.fragment,e),o(ds.$$.fragment,e),o(us.$$.fragment,e),o(hs.$$.fragment,e),o(cs.$$.fragment,e),o(_s.$$.fragment,e),o(vs.$$.fragment,e),o(Cs.$$.fragment,e),o(ws.$$.fragment,e),o(Ss.$$.fragment,e),o(Ps.$$.fragment,e),o(Hs.$$.fragment,e),o(Ts.$$.fragment,e),o(xs.$$.fragment,e),o(ys.$$.fragment,e),o(Ms.$$.fragment,e),o(As.$$.fragment,e),o(Ls.$$.fragment,e),o(Es.$$.fragment,e),o(Ds.$$.fragment,e),o(Rs.$$.fragment,e),o(bs.$$.fragment,e),o(Ns.$$.fragment,e),o(Fs.$$.fragment,e),o(Os.$$.fragment,e),o(Is.$$.fragment,e),o(Us.$$.fragment,e),o(Ws.$$.fragment,e),o(Bs.$$.fragment,e),o(Gs.$$.fragment,e),o(Js.$$.fragment,e),o(js.$$.fragment,e),o(qs.$$.fragment,e),o(Ks.$$.fragment,e),o(zs.$$.fragment,e),o(Qs.$$.fragment,e),o(Xs.$$.fragment,e),o(Zs.$$.fragment,e),o(Ys.$$.fragment,e),o(ei.$$.fragment,e),o(ti.$$.fragment,e),o(ni.$$.fragment,e),o(ri.$$.fragment,e),o(si.$$.fragment,e),o(ii.$$.fragment,e),o(ai.$$.fragment,e),o(li.$$.fragment,e),o(pi.$$.fragment,e),o($i.$$.fragment,e),o(gi.$$.fragment,e),o(fi.$$.fragment,e),o(di.$$.fragment,e),o(ui.$$.fragment,e),o(hi.$$.fragment,e),o(ci.$$.fragment,e),o(_i.$$.fragment,e),o(vi.$$.fragment,e),o(Ci.$$.fragment,e),o(wi.$$.fragment,e),o(Si.$$.fragment,e),o(Hi.$$.fragment,e),o(Ti.$$.fragment,e),o(xi.$$.fragment,e),o(yi.$$.fragment,e),o(Mi.$$.fragment,e),o(Ai.$$.fragment,e),o(Li.$$.fragment,e),o(Ei.$$.fragment,e),o(Di.$$.fragment,e),o(Ri.$$.fragment,e),o(bi.$$.fragment,e),o(Ni.$$.fragment,e),o(Ii.$$.fragment,e),o(Wi.$$.fragment,e),fo=!0)},o(e){$(Zt.$$.fragment,e),$(Yt.$$.fragment,e),$(en.$$.fragment,e),$(tn.$$.fragment,e),$(rn.$$.fragment,e),$(sn.$$.fragment,e),$(ln.$$.fragment,e),$(mn.$$.fragment,e),$(on.$$.fragment,e),$($n.$$.fragment,e),$(gn.$$.fragment,e),$(fn.$$.fragment,e),$(dn.$$.fragment,e),$(un.$$.fragment,e),$(cn.$$.fragment,e),$(Cn.$$.fragment,e),$(wn.$$.fragment,e),$(Sn.$$.fragment,e),$(Pn.$$.fragment,e),$(Hn.$$.fragment,e),$(xn.$$.fragment,e),$(yn.$$.fragment,e),$(Mn.$$.fragment,e),$(An.$$.fragment,e),$(Ln.$$.fragment,e),$(Dn.$$.fragment,e),$(bn.$$.fragment,e),$(Fn.$$.fragment,e),$(On.$$.fragment,e),$(In.$$.fragment,e),$(Bn.$$.fragment,e),$(Gn.$$.fragment,e),$(Vn.$$.fragment,e),$(Jn.$$.fragment,e),$(jn.$$.fragment,e),$(qn.$$.fragment,e),$(Kn.$$.fragment,e),$(zn.$$.fragment,e),$(Qn.$$.fragment,e),$(Xn.$$.fragment,e),$(Zn.$$.fragment,e),$(Yn.$$.fragment,e),$(er.$$.fragment,e),$(tr.$$.fragment,e),$(nr.$$.fragment,e),$(rr.$$.fragment,e),$(sr.$$.fragment,e),$(ar.$$.fragment,e),$(lr.$$.fragment,e),$(pr.$$.fragment,e),$(mr.$$.fragment,e),$(or.$$.fragment,e),$($r.$$.fragment,e),$(gr.$$.fragment,e),$(fr.$$.fragment,e),$(dr.$$.fragment,e),$(ur.$$.fragment,e),$(hr.$$.fragment,e),$(cr.$$.fragment,e),$(_r.$$.fragment,e),$(vr.$$.fragment,e),$(Cr.$$.fragment,e),$(wr.$$.fragment,e),$(Sr.$$.fragment,e),$(kr.$$.fragment,e),$(Pr.$$.fragment,e),$(Hr.$$.fragment,e),$(Tr.$$.fragment,e),$(xr.$$.fragment,e),$(yr.$$.fragment,e),$(Mr.$$.fragment,e),$(Ar.$$.fragment,e),$(Lr.$$.fragment,e),$(Er.$$.fragment,e),$(Dr.$$.fragment,e),$(Rr.$$.fragment,e),$(br.$$.fragment,e),$(Nr.$$.fragment,e),$(Fr.$$.fragment,e),$(Or.$$.fragment,e),$(Ir.$$.fragment,e),$(Ur.$$.fragment,e),$(Wr.$$.fragment,e),$(Br.$$.fragment,e),$(Gr.$$.fragment,e),$(Vr.$$.fragment,e),$(Jr.$$.fragment,e),$(jr.$$.fragment,e),$(qr.$$.fragment,e),$(Kr.$$.fragment,e),$(zr.$$.fragment,e),$(Qr.$$.fragment,e),$(Xr.$$.fragment,e),$(Zr.$$.fragment,e),$(Yr.$$.fragment,e),$(es.$$.fragment,e),$(ts.$$.fragment,e),$(ns.$$.fragment,e),$(rs.$$.fragment,e),$(ss.$$.fragment,e),$(is.$$.fragment,e),$(as.$$.fragment,e),$(ls.$$.fragment,e),$(ps.$$.fragment,e),$(ms.$$.fragment,e),$(os.$$.fragment,e),$($s.$$.fragment,e),$(gs.$$.fragment,e),$(fs.$$.fragment,e),$(ds.$$.fragment,e),$(us.$$.fragment,e),$(hs.$$.fragment,e),$(cs.$$.fragment,e),$(_s.$$.fragment,e),$(vs.$$.fragment,e),$(Cs.$$.fragment,e),$(ws.$$.fragment,e),$(Ss.$$.fragment,e),$(Ps.$$.fragment,e),$(Hs.$$.fragment,e),$(Ts.$$.fragment,e),$(xs.$$.fragment,e),$(ys.$$.fragment,e),$(Ms.$$.fragment,e),$(As.$$.fragment,e),$(Ls.$$.fragment,e),$(Es.$$.fragment,e),$(Ds.$$.fragment,e),$(Rs.$$.fragment,e),$(bs.$$.fragment,e),$(Ns.$$.fragment,e),$(Fs.$$.fragment,e),$(Os.$$.fragment,e),$(Is.$$.fragment,e),$(Us.$$.fragment,e),$(Ws.$$.fragment,e),$(Bs.$$.fragment,e),$(Gs.$$.fragment,e),$(Js.$$.fragment,e),$(js.$$.fragment,e),$(qs.$$.fragment,e),$(Ks.$$.fragment,e),$(zs.$$.fragment,e),$(Qs.$$.fragment,e),$(Xs.$$.fragment,e),$(Zs.$$.fragment,e),$(Ys.$$.fragment,e),$(ei.$$.fragment,e),$(ti.$$.fragment,e),$(ni.$$.fragment,e),$(ri.$$.fragment,e),$(si.$$.fragment,e),$(ii.$$.fragment,e),$(ai.$$.fragment,e),$(li.$$.fragment,e),$(pi.$$.fragment,e),$($i.$$.fragment,e),$(gi.$$.fragment,e),$(fi.$$.fragment,e),$(di.$$.fragment,e),$(ui.$$.fragment,e),$(hi.$$.fragment,e),$(ci.$$.fragment,e),$(_i.$$.fragment,e),$(vi.$$.fragment,e),$(Ci.$$.fragment,e),$(wi.$$.fragment,e),$(Si.$$.fragment,e),$(Hi.$$.fragment,e),$(Ti.$$.fragment,e),$(xi.$$.fragment,e),$(yi.$$.fragment,e),$(Mi.$$.fragment,e),$(Ai.$$.fragment,e),$(Li.$$.fragment,e),$(Ei.$$.fragment,e),$(Di.$$.fragment,e),$(Ri.$$.fragment,e),$(bi.$$.fragment,e),$(Ni.$$.fragment,e),$(Ii.$$.fragment,e),$(Wi.$$.fragment,e),fo=!1},d(e){e&&(t(x),t(oe),t(X),t(Z),t($e),t(Fl),t(Ee),t(Ol),t(Ce),t(Il),t(De),t(Ul),t(re),t(Wl),t(Re),t(Bl),t(we),t(Gl),t(be),t(Vl),t(nn),t(Jl),Oa.d(),t(Ia),t(ge),t(jl),t(Ne),t(ql),t(an),t(Kl),Ua.d(),t(Wa),t(Fe),t(zl),t(Se),t(Ql),t(Oe),t(Xl),t(pn),t(Zl),t(Ie),t(Yl),t(j),t(ep),t(Ue),t(tp),t(se),t(np),t(We),t(rp),Ba.d(),t(Ga),t(hn),t(sp),t(Be),t(ip),t(ke),t(ap),Va.d(),t(Ja),t(_n),t(lp),t(Ge),t(pp),t(Ve),t(mp),t(vn),t(op),t(Je),t($p),ja.d(),t(qa),t(Y),t(gp),t(kn),t(fp),t(je),t(dp),t(Pe),t(up),t(qe),t(hp),t(Tn),t(cp),t(Ke),t(_p),t(fe),t(vp),Ka.d(),t(za),t(ze),t(Cp),t(Qe),t(wp),Qa.d(),t(Xa),t(Xe),t(Sp),t(Ze),t(kp),t(En),t(Pp),Za.d(),t(Ya),t(na),t(Hp),t(Rn),t(Tp),t(Ye),t(xp),t(Nn),t(yp),el.d(),t(tl),t(ra),t(Mp),nl.d(),t(rl),sl.d(),t(il),t(et),t(Ap),t(tt),t(Lp),t(Un),t(Ep),al.d(),t(ll),t(Wn),t(Dp),t(nt),t(Rp),pl.d(),t(ml),t(rt),t(bp),t(y),t(Np),t(st),t(Fp),t(it),t(Op),t(ie),t(Ip),t(at),t(Up),t(F),t(Wp),t(lt),t(Bp),t(ir),t(Gp),t(pt),t(Vp),t(ae),t(Jp),t(mt),t(jp),t(ee),t(qp),t(B),t(Kp),t(te),t(zp),t(ot),t(Qp),t(He),t(Xp),t($t),t(Zp),t(le),t(Yp),t(gt),t(em),t(q),t(tm),t(ft),t(nm),t(w),t(rm),t(dt),t(sm),t(ut),t(im),t(K),t(am),ol.d(),t($l),t(ht),t(lm),t(S),t(pm),t(ct),t(mm),t(b),t(om),t(_t),t($m),t(vt),t(gm),t(P),t(fm),t(Ct),t(dm),t(wt),t(um),t(ks),t(hm),t(St),t(cm),t(G),t(_m),t(kt),t(vm),t(Te),t(Cm),t(Pt),t(wm),t(Ht),t(Sm),t(O),t(km),t(Tt),t(Pm),t(V),t(Hm),t(xt),t(Tm),t(yt),t(xm),t(Mt),t(ym),t(At),t(Mm),t(Lt),t(Am),t(xa),t(Lm),t(Et),t(Em),t(Dt),t(Dm),t(bt),t(Rm),t(Vs),t(bm),gl.d(),t(fl),t(D),t(Nm),t(Nt),t(Fm),t(L),t(Om),t(Ft),t(Im),t(xe),t(Um),t(Ot),t(Wm),t(mi),t(Bm),t(oi),t(Gm),dl.d(),t(ul),t(It),t(Vm),t(pe),t(Jm),t(ye),t(jm),t(me),t(qm),t(de),t(Km),t(Ut),t(zm),t(ue),t(Qm),t(ki),t(Xm),hl.d(),t(cl),t(Wt),t(Zm),t(Bt),t(Ym),t(Pi),t(eo),t(Gt),t(to),t(La),t(no),_l.d(),t(vl),Cl.d(),t(wl),t(N),t(ro),t(Vt),t(so),t(ne),t(io),t(Jt),t(ao),t(jt),t(lo),t(Fi),t(po),Sl.d(),t(kl),t(Oi),t(mo),Pl.d(),t(Hl),t(Ea),t(oo),t(qt),t($o),t(Ui),t(go),Tl.d(),t(xl),t(Da)),g(Zt),g(Yt),g(en),g(tn),g(rn),g(sn),g(ln),g(mn),g(on),g($n),g(gn),g(fn),g(dn),g(un),g(cn),g(Cn),g(wn),g(Sn),g(Pn),g(Hn),g(xn),g(yn),g(Mn),g(An),g(Ln),g(Dn),g(bn),g(Fn),g(On),g(In),g(Bn),g(Gn),g(Vn),g(Jn),g(jn),g(qn),g(Kn),g(zn),g(Qn),g(Xn),g(Zn),g(Yn),g(er),g(tr),g(nr),g(rr),g(sr),g(ar),g(lr),g(pr),g(mr),g(or),g($r),g(gr),g(fr),g(dr),g(ur),g(hr),g(cr),g(_r),g(vr),g(Cr),g(wr),g(Sr),g(kr),g(Pr),g(Hr),g(Tr),g(xr),g(yr),g(Mr),g(Ar),g(Lr),g(Er),g(Dr),g(Rr),g(br),g(Nr),g(Fr),g(Or),g(Ir),g(Ur),g(Wr),g(Br),g(Gr),g(Vr),g(Jr),g(jr),g(qr),g(Kr),g(zr),g(Qr),g(Xr),g(Zr),g(Yr),g(es),g(ts),g(ns),g(rs),g(ss),g(is),g(as),g(ls),g(ps),g(ms),g(os),g($s),g(gs),g(fs),g(ds),g(us),g(hs),g(cs),g(_s),g(vs),g(Cs),g(ws),g(Ss),g(Ps),g(Hs),g(Ts),g(xs),g(ys),g(Ms),g(As),g(Ls),g(Es),g(Ds),g(Rs),g(bs),g(Ns),g(Fs),g(Os),g(Is),g(Us),g(Ws),g(Bs),g(Gs),g(Js),g(js),g(qs),g(Ks),g(zs),g(Qs),g(Xs),g(Zs),g(Ys),g(ei),g(ti),g(ni),g(ri),g(si),g(ii),g(ai),g(li),g(pi),g($i),g(gi),g(fi),g(di),g(ui),g(hi),g(ci),g(_i),g(vi),g(Ci),g(wi),g(Si),g(Hi),g(Ti),g(xi),g(yi),g(Mi),g(Ai),g(Li),g(Ei),g(Di),g(Ri),g(bi),g(Ni),g(Ii),g(Wi)}}}function ac(zi){let x,ve;const oe=[zi[0],Ah];let X={$$slots:{default:[ic]},$$scope:{ctx:zi}};for(let R=0;R<oe.length;R+=1)X=wd(X,oe[R]);return x=new rc({props:X}),{c(){l(x.$$.fragment)},l(R){p(x.$$.fragment,R)},m(R,Z){m(x,R,Z),ve=!0},p(R,[Z]){const $e=Z&1?sc(oe,[Z&1&&Mh(R[0]),Z&0&&Mh(Ah)]):{};Z&2&&($e.$$scope={dirty:Z,ctx:R}),x.$set($e)},i(R){ve||(o(x.$$.fragment,R),ve=!0)},o(R){$(x.$$.fragment,R),ve=!1},d(R){g(x,R)}}}const Ah={title:"Windows Server",image:"/winsrv.jpg",alt:"Shellkai Huang",created:"2024-09-16T00:00:00.000Z",updated:"2024-09-16T00:00:00.000Z",tags:["Windows","OS"],images:[],slug:"/winsrv/+page.svelte.md",path:"/winsrv",toc:[{depth:2,slug:"gpo-相關設定",title:"GPO 相關設定"},{depth:3,slug:"初次登錄動畫關閉",title:"初次登錄動畫關閉"},{depth:3,slug:"禁止存取控制台設定",title:"禁止存取控制台設定"},{depth:3,slug:"限制或禁止使用者使用特定應用程式",title:"限制或禁止使用者使用特定應用程式"},{depth:3,slug:"設定在-logon-ui-看不到上個登入的使用者",title:"設定在 Logon UI 看不到上個登入的使用者"},{depth:3,slug:"登入時自動掛載共享資料夾",title:"登入時自動掛載共享資料夾"},{depth:3,slug:"若共享資料夾有跨網域",title:"若共享資料夾有跨網域"},{depth:3,slug:"讓-windows-server-也能掛載-debian-smbd",title:"讓 Windows Server 也能掛載 Debian SMBD"},{depth:3,slug:"gpo-個別使用者套用規則",title:"GPO 個別使用者套用規則"},{depth:3,slug:"開機時自動跳出訊息",title:"開機時自動跳出訊息"},{depth:3,slug:"禁止使用-windows-update",title:"禁止使用 Windows Update"},{depth:3,slug:"登入時自動將檔案複製到桌面",title:"登入時自動將檔案複製到桌面"},{depth:3,slug:"用指令載入登錄檔",title:"用指令載入登錄檔"},{depth:2,slug:"dns",title:"DNS"},{depth:3,slug:"dns-快取紀錄關閉",title:"DNS 快取紀錄關閉"},{depth:3,slug:"dns-同步",title:"DNS 同步"},{depth:4,slug:"通知-notify",title:"通知 (Notify)"},{depth:4,slug:"start-of-authority-record-soa",title:"Start of Authority Record (SOA)"},{depth:3,slug:"conditional-forwarders",title:"Conditional Forwarders"},{depth:2,slug:"使用者設定-cmd--for-loop",title:"使用者設定 (cmd & for loop)"},{depth:2,slug:"進階使用者設定-powershell--for-loop",title:"進階使用者設定 (PowerShell & for loop)"},{depth:3,slug:"set-aduser",title:"Set-ADUser"},{depth:3,slug:"dsmod",title:"dsmod"},{depth:2,slug:"群組設定-cmd--for-loop",title:"群組設定 (cmd & for loop)"},{depth:3,slug:"一次允許多個可使用遠端桌面的使用者",title:"一次允許多個可使用遠端桌面的使用者"},{depth:2,slug:"允許-icmp-協議",title:"允許 ICMP 協議"},{depth:2,slug:"讓網域內電腦自動信任-ca-憑證",title:"讓網域內電腦自動信任 CA 憑證"},{depth:3,slug:"允許自動信任設定",title:"允許自動信任設定"},{depth:3,slug:"設定自動信任的電腦",title:"設定自動信任的電腦"},{depth:2,slug:"共享資料夾管理-file-server-resource-manager",title:"共享資料夾管理 (File Server Resource Manager)"},{depth:3,slug:"限制共享資料夾空間",title:"限制共享資料夾空間"},{depth:3,slug:"限制共享資料夾存放檔案類型",title:"限制共享資料夾存放檔案類型"},{depth:2,slug:"快速啟動網路介面控制",title:"快速啟動網路介面控制"},{depth:2,slug:"更改-remote-desktop-的-tcp-port-登錄檔修改",title:"更改 Remote Desktop 的 TCP Port (登錄檔修改)"},{depth:2,slug:"dhcp-server-位址保留",title:"DHCP Server 位址保留"},{depth:2,slug:"vpn-設定",title:"VPN 設定"},{depth:3,slug:"sstp-設定",title:"SSTP 設定"},{depth:4,slug:"有-web-server--https",title:"有 Web Server + HTTPS"},{depth:3,slug:"radius-驗證伺服器",title:"RADIUS 驗證伺服器"},{depth:2,slug:"讓外部電腦信任根憑證-root-ca",title:"讓外部電腦信任根憑證 (Root CA)"},{depth:2,slug:"windows-11",title:"Windows 11"},{depth:3,slug:"安裝跳過-tpmcpu-和-secure-boot-檢查",title:"安裝跳過 TPM、CPU 和 Secure Boot 檢查"},{depth:2,slug:"organizational-unit-ou",title:"Organizational Unit (OU)"},{depth:3,slug:"新增",title:"新增"},{depth:3,slug:"刪除",title:"刪除"},{depth:2,slug:"當-iis-有使用到網路資源的設定",title:"當 IIS 有使用到網路資源的設定"},{depth:2,slug:"edge-group-policy-templates-admx-54-分區可能出",title:"Edge Group Policy Templates ADMX (54 分區可能出)"},{depth:3,slug:"安裝",title:"安裝"},{depth:3,slug:"套用更新",title:"套用更新"},{depth:3,slug:"封鎖衝浪遊戲-surf-game",title:"封鎖衝浪遊戲 (Surf Game)"},{depth:3,slug:"啟動首頁和新索引標籤頁面-startup-home-page-and-new-tab-page",title:"啟動、首頁和新索引標籤頁面 (Startup, home page and new tab page)"},{depth:3,slug:"允許或拒絕網頁截取螢幕畫面-allow-or-deny-screen-capture",title:"允許或拒絕網頁截取螢幕畫面 (Allow or deny screen capture)"},{depth:3,slug:"拒絕存取特定網站-block-access-to-a-list-of-urls",title:"拒絕存取特定網站 (Block access to a list of URLs)"},{depth:2,slug:"對單個使用者或群組做密碼限制-ad-ac",title:"對單個使用者或群組做密碼限制 (AD AC)"},{depth:2,slug:"遠端桌面服務-remote-desktop-service",title:"遠端桌面服務 (Remote Desktop Service)"},{depth:2,slug:"啟用-ip-forwarding-regedit",title:"啟用 IP Forwarding (Regedit)"},{depth:2,slug:"啟用-ntp-server-windows-server",title:"啟用 NTP Server (Windows Server)"},{depth:2,slug:"次級憑證的簽證及安裝-sub-ca",title:"次級憑證的簽證及安裝 (Sub CA)"},{depth:3,slug:"error-the-revocation-function-was-unable-to-check-revocation-because-the-revocation-server-was-offline",title:"error: The revocation function was unable to check revocation because the revocation server was offline"},{depth:2,slug:"透過-powershell-建立-raid",title:"透過 PowerShell 建立 RAID"},{depth:3,slug:"建立-storage-pool",title:"建立 Storage Pool"},{depth:3,slug:"建立-raid-磁區",title:"建立 RAID 磁區"},{depth:2,slug:"啟用重複資料刪除機制",title:"啟用重複資料刪除機制"},{depth:2,slug:"ad-users-csv-import--export",title:"AD Users CSV Import / Export"},{depth:3,slug:"csvde-import-無法使用",title:"csvde (Import 無法使用？)"},{depth:3,slug:"powershell-import-users",title:"Powershell Import Users"}]};function lc(zi,x,ve){return zi.$$set=oe=>{ve(0,x=wd(wd({},x),yh(oe)))},x=yh(x),[x]}class gc extends tc{constructor(x){super(),nc(this,x,lc,ac,Yh,{})}}export{gc as component};
