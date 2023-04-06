class ScoreWindow < Window_Base
  def initialize
    super(0, 0, window_width, window_height)
    makeScore
    refresh
    self.opacity=0
  end
  def window_width
    return 200
  end
  def window_height
    return 100
  end
  def refresh
    contents.clear
    makeScore
  end
  
  def makeScore
    text=sprintf("Score: %d", $game_variables[1])
    draw_text(0, 0, 200, line_height, text)
  end
end
class Scene_Map < Scene_Base
  def start
    super
    SceneManager.clear
    $game_player.straighten
    $game_map.refresh
    $game_message.visible = false
    create_spriteset
    create_all_windows
    @menu_calling = false
    makeWindow
  end
  def makeWindow
    @myWindow=ScoreWindow.new
  end
  def update
    super
    $game_map.update(true)
    $game_player.update
    $game_timer.update
    @spriteset.update
    update_scene if scene_change_ok?
    if $update==1
      @myWindow.refresh
    end
    if $showScore==0
      @myWindow.hide
    end
    if $showScore==1
      @myWindow.show
    end
  end
end
