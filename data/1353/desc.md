**<center>Nguồn: Bài tập thầy Nguyễn Thanh Bình ôn Hải phòng - Ngày 10 tháng 11 năm 2020 (am)</center>**

Hãng hàng không Bovinia mở những chuyến bay kết nối ~N~ cánh đồng, nơi những con bò sinh sống ~(1≤N≤20000)~. Cũng như tất cả các hàng hàng không khác, ~K~ cánh đồng trong số ~N~ cánh đồng trên được thiết kế như là trung tâm của hãng ~(1≤K≤200, K≤N)~.

Hiện tại, hãng hàng không Bovinia có ~M~ tuyến bay một chiều ~(1≤M≤20000)~, tuyến bay thứ ~i~ bay từ cánh đồng ~u_i~ đến cánh đồng ~v_i~ và tốn ~d_i~ USD ~(1≤d_i≤10000)~. Có ít nhất một cánh đồng trong hai cánh đồng ~u_i~ và ~v_i~ là trung tâm của hãng. Ngoài ra giữa hai cánh đồng có không quá một tuyến bay trực tiếp (theo cả hai hướng) và không có tuyến bay nào có cánh đồng xuất phát và kết thúc trùng nhau.

Bessie được giao vận hành bộ phận quản lý bán vé của hãng hàng không Bovinia. Thật không may,  khi cô ta mải mê gặm cỏ ngon trong vài giờ đồng hồ, đã có ~Q~ yêu cầu mua vé máy bay (một chiều) của những con bò ~(1≤Q≤50000)~, trong đó yêu cầu thứ ~i~ là mua vé cho một chuyến bay từ cánh đồng ~a_i~ đến cánh đồng ~b_i~.

Bessie choáng ngợp vì khối lượng công việc đồ sộ đến như vậy. Bạn hãy viết chương trình giúp cô ta tính xem mỗi yêu cầu như vậy có thể thực hiện được không và nếu thực hiện được thì giá tiền nhỏ nhất phải trả là bao nhiêu?

Để giảm thiểu kích thước của dữ liệu ra, bạn chỉ cần in ra tổng số yêu cầu có thể thực hiện được và tổng số giá tiền nhỏ nhất cho chúng. Để ý rằng con số này có thể vượt qua kiểu số nguyên ~32~ bits.

## Dữ liệu vào:
- Dòng đầu tiên ghi bốn số tự nhiên ~N, M, K~ và ~Q~;
- ~M~ dòng tiếp theo, dòng thứ ~i~ ghi ba số ~u_i, v_i, d_i\ (1≤u_i,v_i≤N, u_i≠v_i)~:
- ~K~ dòng tiếp theo, mỗi dòng ghi mã của một trung tâm (trong giới hạn ~1...N~);
- ~Q~ dòng cuối cùng, dòng thứ ~i~ ghi yêu cầu bay thứ ~i~ là hai số nguyên ~a_i, b_i\ (1≤a_i, b_i≤N, a_i≠b_i)~.

## Dữ liệu ra:
- Dòng đầu ghi tổng số lượng yêu cầu bay có thể đáp ứng được;
- Dòng sau ghi tổng giá tiền nhỏ nhất của các yêu cầu bay đáp ứng được.

## Ví dụ:
#### Dữ liệu vào:
```
3 3 1 2
1 2 10
2 3 10
2 1 5
2
1 3
3 1
```

#### Dữ liệu ra:
```
1
20
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)