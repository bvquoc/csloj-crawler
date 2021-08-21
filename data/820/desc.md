**<center>TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XⅤ (SƠN LA 2019)</center>**
<br>

Xét bảng hình chữ nhật kích thước ~m×n~ ô. Các hàng được đánh số từ ~1~ đến ~m~ từ trên xuống dưới, các cột được đánh số từ ~1~ đến ~n~ từ trái qua phải. Ô nằm trên hàng ~i~ và cột ~j~ được ghi một số nguyên không âm, ký hiệu ~C_{ij}~. Ở góc trên trái bảng có một quân cờ. Ta phải chuyển quân cờ về ô dưới phải của bảng theo quy tắc sau:
- Tại mỗi bước nhảy, chỉ được di chuyển sang phải trên cùng một hàng hoặc di chuyển xuống dưới theo cùng một cột;
- Kích thước bước nhảy không được vượt quá số ghi trên ô có quân cờ hiện tại;
- Chỉ được di chuyển trong phạm vi bảng đang xét;

Kích thước của bước nhảy từ ô ~(i,j)~ tới ô ~(u,v)~ được tính bằng giá trị ~u+v-i-j~.

**Yêu cầu**: Cho dãy ~a_1,a_2,…,a_m, b_1,b_2,…,b_n~ và số nguyên dương ~k~. Bảng ~C~ kích thước ~m×n~ được xác định với ~C_{ij}=1+[(a_i+b_j )\text{ mod }k]\  ∀i=1÷m; j=1÷n~. Hãy tính số lượng cách di chuyển quân cờ từ ô trên trái ~(1,1)~ xuống ô dưới phải ~(m,n)~.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương ~m,n,k\ (m,n,k≤4.10^3)~
- Dòng thứ hai chứa ~m~ số nguyên ~a_1,a_2,a_3,…,a_m\ (0≤a_i≤10^9)~
- Dòng thứ ba chứa ~n~ số nguyên ~b_1,b_2,b_3,…,b_n\ (0≤b_i≤10^9)~

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số cách di chuyển tìm được lấy theo **module** ~10^9+7~.

## Ví dụ:
#### Dữ liệu vào:
```
3 2 1
3 4 11
2 5
```

#### Dữ liệu ra:
```
2
```

## Giới hạn:
- ~15\%~ số test tương ứng ~15\%~ số điểm có ~m,n≤10,k=1~
- ~15\%~ số test khác tương ứng ~15\%~ số điểm có ~m,n≤10^3,k=1~
- ~20\%~ số test khác tương ứng ~20\%~ số điểm có ~m,n≤10^3,k≤10~
- ~20\%~ số test khác tương ứng ~20\%~ số điểm có ~m,n≤10^3~
- ~30\%~ số test còn lại tương ứng ~30\%~ số điểm không có ràng buộc gì thêm
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)