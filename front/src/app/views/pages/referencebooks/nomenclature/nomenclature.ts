import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-nomenclature',
  imports: [MatGridListModule, MatButtonModule, MatIconModule, MatMenuModule, MatTabsModule, FormsModule, MatSlideToggleModule], 
  templateUrl: './nomenclature.html',
  styleUrl: './nomenclature.css',
})
export class Nomenclature {

  selectedTabIndex = 0;
  onRemains=true;
  onPrice=false;

  selectFirstTab() {
    this.selectedTabIndex = 0;
  }

  onCreate() {
    console.log('Создано!');
  }

  onSell() {
    console.log('Продано!');
  }

  onBuy() {
    console.log('Куплено!');
  }
  goToGroup(){
    console.log('Перейти к группе!');
  }
  onSetting(){
    console.log("Настроить!");
  }
  editRow(){
    console.log("Редактировать!");
  }
  onPaymentInvoice(){
    console.log('Счет на оплату!');
  }
  onCustomersOrder(){
    console.log('Заказ покупателя');
  }
  onOrderOutfit(){
    console.log('Заказ - наряд');
  }
  onBillOfLading(){
    console.log('Расходная накладная');
  }
  onGetAktWork(){
    console.log('Акт выполненых работ');
  }
  onCheckKKM(){
    console.log('чек ККМ');
  }
  onOrderToSupplier(){
    console.log('Заказ поставщику');
  }
  onReceiptInvoice(){
    console.log('Приходная накладная');
  }
  onAddToCart(){
    console.log('Добавить в корзину из списка');
  }
  onBarcodeSearch(){
    console.log('Поиск по штрихкоду');
  }
  onCopyTheItem(){
    console.log('Скопировать номенклатуру');
  }
  onChengeRemains(){
    console.log('Включить остатки ' + this.onRemains);
  }
  onPrint() {
    window.print(); // или ваша логика печати
  }

}
