###
@CLASS UTILITY
@property v, String|Integer|Boolean value
@description chainable
###

U = (v) ->
  # @TODO create static object, to copy it self to both U.prototype and U = static 
  # so that the U becomes an namespaced function and static function object
  class ut
    constructor : (@initValue = null) ->
                             # capture initial value
      @v        = initValue  # proccessing value
      @cache    = {}
      @settings = {}

      # check if browser supports local storage
      # @TODO add ie detect (kizzy)
      @settings.localstorage = !!('localStorage' in window && window['localStorage'] != null)

      # check if lz-string.js is avaliable
      # http://pieroxy.net/blog/pages/lz-string/index.html
      @settings.storgeCompressor = (typeof LZString != 'undefined') 

      # shared event registration objects 
      # for .on(name, cb), fire(name,data)
      @registerEvts = {}


    ###
    # check type of the stored value ###
    ### ===================================================================== ###

    # @param type (string|array|object|function|win|doc)
    is : (type) ->

      # get the type of the stored value
      # @param obj
      getType = (thing, prime) ->
        Object.prototype.toString.call(thing);

      # comparible types
      types =
        'array'    : '[object Array]'
        'string'   : '[object String]'
        'object'   : '[object Object]'
        'win'      : '[object Window]'
        'doc'      : '[object HTMLDocument]'
        'function' : '[object Function]'

      # return boolean
      @v = ( types[type] == getType(@v) )

      @

    ###
    # EVENTS callbacks ###
    ### ===================================================================== ###

    # callback ON
    on : (n, cb) ->
      @registerEvts[n] = cb

    # callback TRIGGER
    fire : (n, data) ->
      @registerEvts[n](data)

    # return the value
    val : ->
      @v                # return proccessing vulae

    ###
    # Storage ###
    ### ===================================================================== ###

    # set storage
    # @param key
    # @param value
    # @param expire : expire day
    # @param driver : default: localStorage, sessionStorage
    setStore : (k,v,param) ->
      value   = {}

      if param
        value[exp] = if param.expire then param.expire + @time() else null
        storage    = if param.driver then param.driver else localStorage

      if (@settings.localstorage)
        value[value] = v
        
        if @settings.storgeCompressor
            value[value] = LZString.compress(v) 

        # write data
        window[storage][k] = JSON.stringify(value)

    # get storage
    # @param k
    getStore : (k,driver) ->
      # @TODO change value to 'expired' after expired (kizzy)


      # @TODO driver
      if (@settings.localstorage)
        val = if @settings.storgeCompressor then LZString.decompress(localStorage[k]) else JSON.parse(localStorage[k])


    # delete storage
    # @param k
    delStore : (k,driver) ->
      if (@settings.localstorage)
        delete localStorage[k]

    ###
    # Dates ###
    ### ===================================================================== ###

    date: ->
      cache.date ?= new Date()

    time: ->
      +date()

    hasExpired : (exp) ->
      return ( if exp < @time() then true else false )

    setDay: (days) ->
      @date()
      cache.date.setTime(cache.date.getTime() + days * 24 * 60 * 60 * 1000);

    getDate: ->
      @date()
      cache.date.toGMTString()


  new ut(v)
