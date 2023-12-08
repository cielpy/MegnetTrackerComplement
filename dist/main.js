// ==UserScript==
// @name         MagnetTrackerComplement
// @namespace    https://github.com/cielpy/MagnetTrackerComplement
// @version      0.1112
// @description  给网页上的磁链追加优质 tracker
// @author       cielpy
// @include      http://*
// @include      https://*
// @grant        none
// @license      MIT
// @supportURL   https://github.com/cielpy/MagnetTrackerComplement/issues
// ==/UserScript==

// eslint-disable-next-line
(function () {
  const trackerList = ["http%3A%2F%2F1337.abcvg.info%3A80%2Fannounce","http%3A%2F%2Fbt.okmp3.ru%3A2710%2Fannounce","http%3A%2F%2Fbvarf.tracker.sh%3A2086%2Fannounce","http%3A%2F%2Fch3oh.ru%3A6969%2Fannounce","http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce","http%3A%2F%2Fopen.acgnxtracker.com%3A80%2Fannounce","http%3A%2F%2Fshare.camoe.cn%3A8080%2Fannounce","http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce","http%3A%2F%2Ftorrentsmd.com%3A8080%2Fannounce","http%3A%2F%2Ftracker.electro-torrent.pl%3A80%2Fannounce","http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce","http%3A%2F%2Ftracker.gbitt.info%3A80%2Fannounce","http%3A%2F%2Ftracker.ipv6tracker.ru%3A80%2Fannounce","http%3A%2F%2Ftracker.renfei.net%3A8080%2Fannounce","http%3A%2F%2Ftracker.tfile.co%3A80%2Fannounce","http%3A%2F%2Fv6-tracker.0g.cx%3A6969%2Fannounce","http%3A%2F%2Fwww.all4nothin.net%3A80%2Fannounce.php","http%3A%2F%2Fwww.wareztorrent.com%3A80%2Fannounce","https%3A%2F%2F1337.abcvg.info%3A443%2Fannounce","https%3A%2F%2Ft1.hloli.org%3A443%2Fannounce","https%3A%2F%2Ftr.burnabyhighstar.com%3A443%2Fannounce","https%3A%2F%2Ftracker.gbitt.info%3A443%2Fannounce","https%3A%2F%2Ftracker.kuroy.me%3A443%2Fannounce","https%3A%2F%2Ftracker.lilithraws.cf%3A443%2Fannounce","https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce","https%3A%2F%2Ftracker.loligirl.cn%3A443%2Fannounce","https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce","https%3A%2F%2Ftracker.yemekyedim.com%3A443%2Fannounce","https%3A%2F%2Ftracker1.520.jp%3A443%2Fannounce","https%3A%2F%2Ftrackers.mlsub.net%3A443%2Fannounce","https%3A%2F%2Fwww.peckservers.com%3A9443%2Fannounce","udp%3A%2F%2F1c.premierzal.ru%3A6969%2Fannounce","udp%3A%2F%2Faarsen.me%3A6969%2Fannounce","udp%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce","udp%3A%2F%2Fd40969.acod.regrucolo.ru%3A6969%2Fannounce","udp%3A%2F%2Fec2-18-191-163-220.us-east-2.compute.amazonaws.com%3A6969%2Fannounce","udp%3A%2F%2Fepider.me%3A6969%2Fannounce","udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce","udp%3A%2F%2Fipv6.fuuuuuck.com%3A6969%2Fannounce","udp%3A%2F%2Fmoonburrow.club%3A6969%2Fannounce","udp%3A%2F%2Fmovies.zsw.ca%3A6969%2Fannounce","udp%3A%2F%2Fnew-line.net%3A6969%2Fannounce","udp%3A%2F%2Fns1.monolithindustries.com%3A6969%2Fannounce","udp%3A%2F%2Fodd-hd.fr%3A6969%2Fannounce","udp%3A%2F%2Foh.fuuuuuck.com%3A6969%2Fannounce","udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce","udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce","udp%3A%2F%2Fopen.tracker.ink%3A6969%2Fannounce","udp%3A%2F%2Fopen.xxtor.com%3A3074%2Fannounce","udp%3A%2F%2Fopentor.org%3A2710%2Fannounce","udp%3A%2F%2Fopentracker.io%3A6969%2Fannounce","udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce","udp%3A%2F%2Fprivate.anonseed.com%3A6969%2Fannounce","udp%3A%2F%2Fpublic-tracker.cf%3A6969%2Fannounce","udp%3A%2F%2Fretracker01-msk-virt.corbina.net%3A80%2Fannounce","udp%3A%2F%2Frun-2.publictracker.xyz%3A6969%2Fannounce","udp%3A%2F%2Fsabross.xyz%3A6969%2Fannounce","udp%3A%2F%2Fstatic.54.161.216.95.clients.your-server.de%3A6969%2Fannounce","udp%3A%2F%2Fthetracker.org%3A80%2Fannounce","udp%3A%2F%2Fthouvenin.cloud%3A6969%2Fannounce","udp%3A%2F%2Ftk1.trackerservers.com%3A8080%2Fannounce","udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce","udp%3A%2F%2Ftracker.0x7c0.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.4.babico.name.tr%3A3131%2Fannounce","udp%3A%2F%2Ftracker.6.babico.name.tr%3A6969%2Fannounce","udp%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce","udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce","udp%3A%2F%2Ftracker.dler.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.doko.moe%3A6969%2Fannounce","udp%3A%2F%2Ftracker.dump.cl%3A6969%2Fannounce","udp%3A%2F%2Ftracker.edkj.club%3A6969%2Fannounce","udp%3A%2F%2Ftracker.filemail.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.fnix.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce","udp%3A%2F%2Ftracker.skynetcloud.site%3A6969%2Fannounce","udp%3A%2F%2Ftracker.skyts.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.srv00.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.t-rb.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce","udp%3A%2F%2Ftracker.therarbg.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce","udp%3A%2F%2Ftracker.tryhackx.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce","udp%3A%2F%2Ftracker2.dler.com%3A80%2Fannounce","udp%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce","udp%3A%2F%2Fttk2.nbaonlineservice.com%3A6969%2Fannounce","udp%3A%2F%2Fu4.trakx.crim.ist%3A1337%2Fannounce","udp%3A%2F%2Fu6.trakx.crim.ist%3A1337%2Fannounce","udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce","udp%3A%2F%2Fwepzone.net%3A6969%2Fannounce","udp%3A%2F%2Fy.paranoid.agency%3A6969%2Fannounce"]
  const trackerListUrlPrams = `&tr=${trackerList.join('&tr=')}`

  function appendTrackers(url) {
    let newUrl = url
    if (url.includes(' ')) {
      newUrl = url.replace(/ /g, '%20')
    }
    return newUrl + trackerListUrlPrams
  }
  const aTags = document.querySelectorAll('a')

  for (let i = 0; i <= aTags.length; i += 1) {
    if (aTags[i] !== undefined && aTags[i].href !== undefined && aTags[i].href.startsWith('magnet:')) {
      aTags[i].href = appendTrackers(aTags[i].href)
    }
  }



  const observer = new MutationObserver(((mutations) => {
    // eslint-disable-next-line
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        function findAndChangeA(nodeList) {
          nodeList.forEach((node) => {
            if (node.localName === 'a' && node.href !== undefined && node.href !== null && node.href !== '') {
              if (node.href.startsWith('magnet:')) {
                // eslint-disable-next-line
                node.href = appendTrackers(node.href)
              }
            }
            if (node.childNodes !== undefined && node.childNodes !== null && node.childNodes.length !== 0) {
              findAndChangeA(node.childNodes)
            }
          })
        }
        findAndChangeA(mutation.addedNodes)
      }
    }
  }))

  observer.observe(document, {
    attributes: false, childList: true, characterData: false, subtree: true,
  })
}())
