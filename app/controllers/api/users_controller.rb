class Api::UsersController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy]
  
  # model name -> user
  def index
    render json: User.all 
  end
  
  def show
    render json: @user
  end
  
  def create
    @user = User.new(user_params)
    if @user.save 
      render json: @user
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end
  
  def destroy
    @user.destroy
    render json: { message: 'User deleted' }
  end
  
  private 
    def user_params
      params.require(:user).permit(:first_name, :last_name, :age, :gender, :phone_number )
    end
  
    def set_list
      @user = User.find(params[:id])
    end
end