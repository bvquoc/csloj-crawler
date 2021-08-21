**<center>Hải Phòng - Ngày 06 tháng 11 năm 2020 (pm)</center>**

Công viêng Rồng (Dragon Park) ở thành phố Hạ Long là một trong những điểm vui chơi nổi tiếng ở miền Bắc. Tại đây khách du lịch có thể tham gia nhiều trò chơi khác nhau, trong đó có nhiều trò chơi mạo hiểm chỉ có duy nhất trong cả nước. Mỗi trò chơi như vậy được tổ chức tại một địa điểm trong công viên.

Có tổng cộng ~𝑁~ điạ điểm vui chơi khác nhau ~(2 ≤ 𝑁 ≤ 10^5)~, đánh số ~1, 2, …, 𝑁~, được kết nối với nhau bởi ~𝑁 − 1~ con đường hai chiều sao cho bằng những con đường này thì từ một điểm vui chơi bất kỳ luôn có thể đi đến được điểm vui chơi khác. Điểm vui chơi ~𝑖~ được đánh giá mức độ hấp dẫn bằng một số nguyên ~𝑒_𝑖\ (𝑖 = 1 ÷ 𝑁)~ tuy nhiên giá trị này có thể thay đổi trong ngày tùy theo từng thời điểm.

Một du khách đi từ điểm vui chơi ~𝑖~ đến điểm vui chơi ~𝑗~ sẽ trải nghiệm tất cả các trò chơi trên tuyến đường đơn từ ~𝑖~ đến ~𝑗~ (tuyến đường đơn là tuyến đường mà mỗi điểm vui chơi đi qua không quá một lần) và thật kỳ lạ, cảm giác hấp dẫn của du khác sẽ bằng tổng `XOR` của mức độ hấp dẫn của tất cả các điểm vui chơi mà anh (cô) ta đi qua.

Viết chương trình xác định cảm giác hấp dẫn của du khác trên mỗi hành trình của anh (cô) ta?.

## Dữ liệu vào:
- Dòng đầu ghi hai sô nguyên dương ~𝑁~ - số điểm vui chơi và ~𝑄\ (1 ≤ 𝑄 ≤ 10^5)~ - số truy vấn cần thực hiện.
- Dòng thứ hai ghi ~𝑁~ số nguyên ~𝑒_1, 𝑒_2, … , 𝑒_𝑁\ (0 ≤ 𝑒_𝑖 ≤ 10^9)~ là mức độ hấp dẫn ban đầu của các điểm vui chơi.
- ~𝑁 − 1~ dòng tiếp theo, mỗi dòng chứa hai số nguyên ~𝑎, 𝑏~ thể hiện có một con đường hai chiều nối điểm vui chơi ~𝑎~ với điểm vui chơi ~𝑏\ (1 ≤ 𝑎, 𝑏 ≤ 𝑁; 𝑎 ≠ 𝑏)~.
- Cuối cùng là ~𝑄~ dòng, mỗi dòng mô tả một truy vấn thực hiện lần lượt thuộc một trong hai loại:
    - ~1\ i\ v~: Điểm vui chơi ~𝑖~ sẽ có độ hấp dẫn mới là ~𝑣~;
    - ~2\ i\ j~: Xác dịnh cảm giác hấp dẫn của du khách trên hành trình từ điểm vui chơi ~𝑖~ đến diểm vui chơi ~𝑗~.

## Dữ liệu ra:
- Với các truy vấn ~2\ i\ j~ in ra kết quả tìm được trên một dòng (theo thứ tự trong dữ liệu vào).

## Ví dụ:
#### Dữ liệu vào:
```
5 5
1 2 4 8 16
1 2
1 3
3 4
3 5
2 1 5
1 1 16
2 3 5
2 1 5
2 1 3
```

#### Dữ liệu ra:
```
21
20
4
20
```