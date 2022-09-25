class Api::AppointmentsController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  
  # model name -> apointment
  def index
    render json: Appointment.all 
  end
  
  def show
    render json: @appointment
  end
  
  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save 
      render json: @appointment
    else
      render json: { errors: @appointment.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: { errors: @appointment.errors }, status: :unprocessable_entity
    end
  end
  
  def destroy
    @appointment.destroy
    render json: { message: 'Appointment deleted' }
  end
  
  private 
    def appointment_params
      params.require(:appointment).permit(:stime, :sdate, :description )
    end
  
    def set_list
      @appointment = Appointment.find(params[:id])
    end
end
