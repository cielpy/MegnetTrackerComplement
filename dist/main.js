// ==UserScript==
// @name         MagnetTrackerComplement
// @namespace    https://github.com/cielpy/MagnetTrackerComplement
// @version      0.442
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
  const trackerList = ["http%3A%2F%2F1337.abcvg.info%3A80%2Fannounce","http%3A%2F%2Fbt.okmp3.ru%3A2710%2Fannounce","http%3A%2F%2Fmediaclub.tv%3A80%2Fannounce.php","http%3A%2F%2Fmilanesitracker.tekcities.com%3A80%2Fannounce","http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce","http%3A%2F%2Fopen.acgnxtracker.com%3A80%2Fannounce","http%3A%2F%2Fshare.camoe.cn%3A8080%2Fannounce","http%3A%2F%2Ft.acg.rip%3A6699%2Fannounce","http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce","http%3A%2F%2Ftr.cili001.com%3A8070%2Fannounce","http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce","http%3A%2F%2Ftracker.gbitt.info%3A80%2Fannounce","http%3A%2F%2Ftracker.hiyj.cn%3A80%2Fannounce","http%3A%2F%2Ftracker.ipv6tracker.ru%3A80%2Fannounce","http%3A%2F%2Ftracker.mywaifu.best%3A6969%2Fannounce","http%3A%2F%2Fvps02.net.orel.ru%3A80%2Fannounce","https%3A%2F%2Fcarbon-bonsai-621.appspot.com%3A443%2Fannounce","https%3A%2F%2Fo-unkusrx.cloud.okteto.net%3A443%2Fannounce","https%3A%2F%2Ft.btcland.xyz%3A443%2Fannounce","https%3A%2F%2Ftp.m-team.cc%3A443%2Fannounce.php","https%3A%2F%2Ftr.burnabyhighstar.com%3A443%2Fannounce","https%3A%2F%2Ftr.doogh.club%3A443%2Fannounce","https%3A%2F%2Ftr.fuckbitcoin.xyz%3A443%2Fannounce","https%3A%2F%2Ftr.highstar.shop%3A443%2Fannounce","https%3A%2F%2Ftr.ready4.icu%3A443%2Fannounce","https%3A%2F%2Ftracker.imgoingto.icu%3A443%2Fannounce","https%3A%2F%2Ftracker.kuroy.me%3A443%2Fannounce","https%3A%2F%2Ftracker.lilithraws.cf%3A443%2Fannounce","https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce","https%3A%2F%2Ftracker.nanoha.org%3A443%2Fannounce","https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce","https%3A%2F%2Ftracker.yarr.pt%3A443%2Fannounce","https%3A%2F%2Ftrackme.theom.nz%3A443%2Fannounce","udp%3A%2F%2F6ahddutb1ucc3cp.ru%3A6969%2Fannounce","udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce","udp%3A%2F%2Fabufinzio.monocul.us%3A6969%2Fannounce","udp%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce","udp%3A%2F%2Fbt2.archive.org%3A6969%2Fannounce","udp%3A%2F%2Fcode2chicken.nl%3A6969%2Fannounce","udp%3A%2F%2Fengplus.ru%3A6969%2Fannounce","udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce","udp%3A%2F%2Ffe.dealclub.de%3A6969%2Fannounce","udp%3A%2F%2Fipv6.tracker.monitorit4.me%3A6969%2Fannounce","udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce","udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce","udp%3A%2F%2Fopentor.org%3A2710%2Fannounce","udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce","udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce","udp%3A%2F%2Fretracker.hotplug.ru%3A2710%2Fannounce","udp%3A%2F%2Fretracker.lanta-net.ru%3A2710%2Fannounce","udp%3A%2F%2Fthetracker.org%3A80%2Fannounce","udp%3A%2F%2Ftorrentclub.space%3A6969%2Fannounce","udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce","udp%3A%2F%2Ftracker.0x.tf%3A6969%2Fannounce","udp%3A%2F%2Ftracker.altrosky.nl%3A6969%2Fannounce","udp%3A%2F%2Ftracker.auctor.tv%3A6969%2Fannounce","udp%3A%2F%2Ftracker.beeimg.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce","udp%3A%2F%2Ftracker.bitsearch.to%3A1337%2Fannounce","udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce","udp%3A%2F%2Ftracker.dler.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.jordan.im%3A6969%2Fannounce","udp%3A%2F%2Ftracker.lelux.fi%3A6969%2Fannounce","udp%3A%2F%2Ftracker.moeking.eu.org%3A6969%2Fannounce","udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce","udp%3A%2F%2Ftracker.monitorit4.me%3A6969%2Fannounce","udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce","udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce","udp%3A%2F%2Ftracker.srv00.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.sylphix.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce","udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce","udp%3A%2F%2Ftracker2.dler.com%3A80%2Fannounce","udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce","udp%3A%2F%2Fwww.torrent.eu.org%3A451%2Fannounce"]
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
