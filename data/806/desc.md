**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XIII (TUYÊN QUANG 2017)</center>**
<br>

Đất nước VN có ~n~ thành phố, tất cả nằm dọc theo một con đường cao tốc. Trung tâm thành phố thứ ~i~ có khoảng cách đến vị trí bắt đầu con đường cao tốc là ~d_i\ \left(i=1,2,..,n\right)~. Với những thành tích vang dội của các đoàn Olympic nước VN vừa đạt được trên đấu trường quốc tế, chính phủ muốn thành lập một trung tâm bồi dưỡng tài năng. Một vấn đề quan trọng đang được xem xét đó là lựa chọn vị trí để xây dựng trung tâm. Nếu trung tâm được đặt ở vị trí có khoảng cách tính từ vị trí bắt đầu con đường cao tốc là ~p~ thì mức độ phù hợp được tính bằng:
~~\sum\limits_{i = 1}^n {{{\rm{w}}_i} \times \left| {{d_i} - p} \right|}\text{ trong đó }w_i\text{ là mức độ ưu tiên của thành phố thứ }i.~~

Hiện tại, chính phủ đang đánh giá ~m~ đề xuất xây dựng trung tâm tại các vị trí ~p_1,p_2,…,p_m~.

**Yêu cầu**: Cho các số nguyên dương ~d_1,d_2,..,d_n,w_1,w_2,..,w_n~ và ~m~ đề xuất vị trí xây dựng trung tâm ~p_1,p_2,…,p_m~, với mỗi đề xuất hãy tính mức độ phù hợp.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~n,m~;
- Dòng thứ hai chứa ~n~ số nguyên dương ~d_1,d_2,..,d_n  \left(0<d_i≤10^6\right)~;
- Dòng thứ ba chứa ~n~ số nguyên dương ~w_1,w_2,..,w_n  \left(0<w_i≤10^3\right)~;
- Dòng thứ ~k~ trong ~m~ dòng tiếp theo chứa một số nguyên dương ~p_k~ mô tả cho đề xuất thứ ~k \left(0<p_k≤10^6;k=1,2,…,m\right)~.

## Dữ liệu ra:
- Ghi ra ~m~ dòng (mỗi dòng tương ứng với một đề xuất), dòng thứ ~k~ là giá trị phù hợp cho đề xuất thứ ~k~.

## Ví dụ:
#### Dữ liệu vào:
```
3 2
1 2 4
1 2 1
2
3
```

#### Dữ liệu ra:
```
3
5
```

#### Dữ liệu vào:
```
4 2
1 2 3 2
1 2 4 1
4
2
```

#### Dữ liệu ra:
```
13
5
```

## Ràng buộc:
- Có ~30\%~ số test ứng với ~30\%~ số điểm của bài có ~n≤10;m=1;d_i≤1000~;
- Có ~30\%~ test khác ứng với ~30\%~ số điểm của bài có ~n≤10^5;m≤10~;
- Có ~20\%~ test khác ứng với ~20\%~ số điểm của bài có ~n≤10^5;m≤10^5;w_i=1~;
- Có ~20\%~ số test còn lại ứng với ~20\%~ số điểm của bài có ~n≤10^5;m≤10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)