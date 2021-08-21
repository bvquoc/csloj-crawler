**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 3 - Ôn Hải Phòng T11/2020</center>**

Một cuộc thi lập trình Olympic Tin học Quốc gia được tổ chức với ~5~ nhà tài trợ khác nhau. Vì vậy, Ban tổ chức (BTC), muốn đặt các quảng cáo trên các con đường nối ~5~ nhà tài trợ này. Ông ấy muốn đảm bảo rằng bất kỳ ai cũng sẽ nhìn thấy các quảng cáo trên mọi con đường họ đi qua giữa các cặp địa điểm đặt văn phòng của các nhà tài trợ. Vì vậy, bất kỳ con đường nào trên con đường ngắn nhất nối bất kỳ cặp địa điểm trong số ~5~ nhà tài trợ đều phải được lắp đặt quảng cáo ven đường.

Chi phí để đặt một quảng cáo trên con đường đó đã được biết trước. Tổng chi phí của chiến dịch quảng cáo này là tổng của các chi phí đặt biển quảng cáo trên các con đường. BTC muốn tìm chi phí tối thiểu cần thiết để đạt được mục tiêu của mình.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~N~ – số lượng các địa điểm thuộc thành phố tổ chức cuộc thi.
- ~N – 1~ dòng tiếp theo, mỗi dòng chứa ba số nguyên ~u, v, w\ (0 ≤ u, v ≤ N, 1 ≤ w ≤ 10^3)~ thể hiện nếu đặt biển quảng cáo trực tiếp giữa hai địa điểm ~u~ và ~v~ thì mất chi phí là ~w~; 
- Dòng tiếp theo là ~Q~ – số lượng truy vấn;
- ~Q~ dòng tiếp theo, mỗi dòng chứa ~5~ số nguyên ~a, b, c, d, e~ là địa điểm của ~5~ nhà tài trợ cuộc thi, trong đó ~a, b, c, d, e~ đôi một khác nhau.

#### Dữ liệu ra:
- Gồm ~Q~ dòng, mỗi dòng là tổng chi phí đặt biển quảng nhỏ nhất tương ứng với ~5~ nhà tài trợ được cho trong **dữ liệu vào**.

## Ví dụ:
#### Dữ liệu vào:
```
6
4 0 4
0 1 2
1 3 9
3 5 1
3 2 5
2
4 0 3 5 2
0 4 1 3 5
```

#### Dữ liệu ra:
```
21
16
```
## Giới hạn:
- Subtask ~\#1: 7\%~ số điểm có ~V = 5, Q = 1~;
- Subtask ~\#2: 23\%~ số điểm khác có ~5 ≤ V ≤ 50000, 1 ≤ Q ≤ 10000~, mỗi địa điểm nối tối đa tới hai đỉnh khác;
- Subtask ~\#3: 40\%~ số điểm khác có ~5 ≤ V ≤ 50000, 1 ≤ Q ≤ 100~;
- Subtask ~\#4: 30\%~ số điểm còn lại có ~5 ≤ V ≤ 50000, 1 ≤ Q ≤ 10000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)