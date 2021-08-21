**<center>Hải Phòng - Ngày 06 tháng 11 năm 2020 (pm)</center>**

Nông dân John (FJ) nhận ra rằng thu nhập mà anh ta nhận được từ việc sản xuất sữa bò không đủ trang trải cho việc  phát triển trang trại của anh ta. Do vậy, để có thêm tiền, anh ta quan tâm đến một  dịch  vụ cho thuê bò mà anh ta gọi là "USACOW".

FJ có ~𝑁\ (1 ≤ 𝑁 ≤ 10^5)~ con bò, mỗi con bò có khả năng sản xuất một lượng sữa nhất định trong mỗi ngày. Có ~𝑀\ (1 ≤ 𝑀 ≤ 10^5)~ cửa hàng sữa gần trang trại của FJ từng đề nghị mua một số lượng sữa với một mức giá biết trước. Hơn nữa, có ~𝑅\ (1 ≤ 𝑅 ≤ 10^5)~ láng giềng của FJ quan tâm đến việc thuê một con bò với một mức giá nhất định.

FJ muốn chọn xem với mỗi con bò thì nên cho vắt sữa hay cho thuê để số tiền anh ta thu được là lớn nhất?.

## Dữ liệu vào:
- Dòng đầu tiên ghi ba số ~𝑁, 𝑀, 𝑅~;
- ~𝑁~ dòng tiếp theo, dòng thứ ~𝑖~ chứa số nguyên dương ~𝑐_𝑖\ (1 ≤ 𝑐_𝑖 ≤ 10^6)~ là sản lượng sữa hàng ngày của con bò thứ ~𝑖~ (tính bằng lit);
- ~𝑀~ dòng tiếp theo, dòng thứ ~𝑖~ chứa hai số nguyên ~𝑞_𝑖, 𝑝_𝑖\ (1 ≤ 𝑞_𝑖, 𝑝_𝑖 ≤ 10^6)~ thể hiện rằng cửa hàng thứ ~𝑖~ đề nghi mua không quá ~𝑞_𝑖~ lít sữa mỗi ngày với giá ~𝑝_𝑖~;
- ~𝑅~ dòng cuối cùng, dòng thứ ~𝑖~ ghi số nguyên dương ~𝑟_𝑖\ (1 ≤ 𝑟_𝑖 ≤ 10^6)~ thể hiện rằng láng giềng thứ ~𝑖~ của FJ muốn thuê một con bò với gia ~𝑟_𝑖~ cho một ngày.

## Dữ liệu ra:
- Ghi ra một số nguyên là số tiền lớn nhất mà FJ có thể nhận được. Chú ý rằng kết quả có thể vượt qua kiểu số nguyên 32 bits

## Ví dụ:
#### Dữ liệu vào:
```
5 3 4
6
2
4
7
1
10 25
2 10
15 15
250
80
100
40
```

#### Dữ liệu ra:
```
725
```

#### Giải thích:
- FJ để con bò ~\#1~ và ~\#4~ vắt sữa được ~13~ lít sữa mỗi ngày. Anh ta bán ~10~ lít với giá ~25~ và ~3~ 
lít còn lại với giá ~15~ . Tổng cộng được ~295~. Tiếp theo, anh ta cho thuê ~3~ con bò với giá ~250~, ~80~ và ~100~. Tổng cộng được ~725~.