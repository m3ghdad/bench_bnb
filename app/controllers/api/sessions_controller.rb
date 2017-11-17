class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login!(user)
      # redirect_to
    else
      flash.now[:errors] = ["Invalid credentials"]
      # render :new
    end
  end

  def destroy
    logout!
    # redirect_to new_session_url
  end

  def new
  end
end
