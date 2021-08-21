Hải Dương đang có ý định thành lập công ty CloudComp chuyên cung cấp dịch vụ tính toán điện toán đám mây.
Việc đầu tiên Hải Dương cần làm là đi tìm hiểu để mua máy tính cung cấp dịch vụ. Qua tìm hiểu, Hải Dương nhận được danh sách ~n~ máy tính (đánh số từ ~1~ đến ~n~), máy tính thứ ~i~ được đặc trưng bởi bộ ~3~ số nguyên dương ~c_i,f_i,v_i~ tương ứng là số lõi, tần số xung nhịp và giá bán.

Hải Dương cũng đã nhận được ~m~ đơn hàng cung cấp dịnh vụ điện toán đám mây (đánh số từ ~1~ đến ~m~). Đơn hàng thứ ~i~ yêu cầu cung cấp dịch vụ với bộ ~3~ số nguyên dương ~C_i,F_i,V_i~ tương ứng là số lõi, tần số xung nhịp tối thiểu của các lõi và giá thuê dịch vụ. Nếu đơn hàng được chấp nhận thì CloudComp cần cung cấp cho khách hàng ~C_i~ lõi (có thể lấy tử các máy tính khác nhau, những lõi này chưa cung cấp cho bất cứ một đơn hàng nào trước đó), tần số xung nhịp tối thiểu của các lõi là ~F_i~ và sẽ nhận được khoản tiền là ~V_i~.

**Yêu cầu:** Bạn hãy giúp Hải Dương tính toán chọn mua máy tính cũng như chọn các đơn hàng để cung cấp dịch vụ sao cho thu được lợi nhận lớn nhất (lợi nhuận chênh lệch giữa số tiền thu được từ việc cung cấp dịch vụ và chi phí bỏ ra để mua các máy tính).

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n~ là số máy tính có thể mua;
- ~n~ dòng tiếp theo, dòng thứ ~i~ chứa ba số nguyên dương ~c_i,f_i,v_i~;
- Dòng tiếp theo chứa số nguyên dương ~m~ là số đơn hàng yêu cầu cung cấp dịch vụ;
- ~m~ dòng tiếp theo, dòng thứ ~i~ chứa ba số nguyên ~C_i,F_i,V_i~;

Các số trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là lợi nhuận lớn nhất thu được.

## Ví dụ:
#### Dữ liệu vào:
```
4
4 2200 700
2 1800 10
20 2550 9999
4 2000 750
3
1 1500 300
6 1900 1500
3 2400 4550
```

#### Dữ liệu ra:
```
350
```

#### Giải thích:
- Mua ~2~ máy tính số ~1~ và số ~4~ với tổng số tiền là ~1450~;
- Cung cấp dịch vụ cho ~2~ đơn hàng số ~1~ và số ~2~ thu được ~1800~;

Lợi nhuận thu được là ~350~ (tối đa)

## Giới hạn:
Trong tất cả các test có: ~1≤n,m≤2000;1≤c_i,C_i≤50;1≤f_i,v_i,F_i,V_i≤10^9~;
- Subtask ~\#1: 18\%~ số điểm có ~n ≤15~;
- Subtask ~\#2: 18\%~ số điểm khác có ~m ≤15~;
- Subtask ~\#3: 18\%~ số điểm khác có ~n,m ≤250,c_i=C_j=1~;
- Subtask ~\#4: 18\%~ số điểm khác có ~f_i=F_j=1~;
- Subtask ~\#5: 18\%~ số điểm khác có ~v_i=V_j=1~;
- Subtask ~\#6: 10\%~ số điểm còn lại không có ràng buộc bổ sung.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)