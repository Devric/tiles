# simple markup builder
# @return String
domBuilder =  (obj)->
    tag     = obj.tag
    prop    = obj.prop
    content = obj.content

    # build string
    # @todo, if space is an issue, can add loop counter for stupid spaces...
    propString = ''
    if prop
      for i of prop
        propString += i + '="tile ' + prop[i] + '" '
    else
      propString = ""

    return [
          '<'
        , tag
        , " "
        , propString
        , '>'
        , content
        , '</'
        , tag
        , '>'
    ].join('');

random = (len) ->
    min = 0
    Math.floor(Math.random() * (len - min + 1)) + min; 


# tileBuilder class
# build tiles with random stuff if not set
TILE::builder = (@obj) ->

  # CONSTANT colour
  @color = [
      'PURPLE'
    , 'MAGENTA'
    , 'TEAL'
    , 'BROWN'
    , 'PINK'
    , 'ORANGE'
    , 'BLUE'
    , 'RED'
    , 'GREEN'
    , 'BLACK'
  ]

  #CONSTANT size
  @size = [
        ''              #1
      , 'double'        #2
      , 'double vert'   #3
      , 'quad'          #4
      , 'quad double'   #5
  ]



  domBuilder(obj)

  @ # return this


# add blocks
TILE::populate = (method, blocks) ->
  for block in blocks
    @parent[method](@build(block))

  return true
