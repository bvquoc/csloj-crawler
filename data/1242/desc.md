**<center>Nguồn: Thầy Thuận, Tập huấn đội tuyển Quảng Ninh, HÀ NỘI, 15/11/2016</center>**

Quốc gia Backoi có ~N~ thành phố, mỗi thành phố có một hệ thống xe chạy liên tỉnh khác nhau. Một xe có thể chạy từ thành phố ~i~ sang thành phố ~j~ nếu như có đường nối trực tiếp giữa hai thành phố này.

Các con đường ở đây đều là đường ~2~ chiều. Mỗi hệ thống xe liên tỉnh có một số luật như sau:
- Hành khách muốn sử dụng hệ thống xe của thành phố ~i~ thì bắt buộc phải bắt xe tại thành phố ~i~;
- Giá vé xe của thành phố ~i~ là đồng hạng ~C_i~ bất kể quãng đường bao xa;
- Hệ thống xe của thành phố ~i~ chỉ cho phép chạy tối đa qua ~D_i~ thành phố.

Quân là một hành khách muốn đi từ thành phố ~1~ đến thành phố ~N~. Hãy giúp Quân tìm cách đi sao cho tổng chi phí là thấp nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~N~ và ~K\ (2 ≤ N ≤ 5000; N − 1 ≤ K ≤ 10000)~;
- ~N~ dòng tiếp theo, dòng thứ ~i~ chứa hai số nguyên dương ~C_i~ và ~D_i\ (1 ≤ C_i ≤ 10000; 1 ≤ D_i ≤ N)~ là hai thông tin của hệ thống xe của thành phố ~i~;
- ~K~ dòng tiếp theo mỗi dòng ghi hai số ~i~ và ~j\ (1 ≤ i < j ≤ N)~ biểu thị giữa hai thành phố ~i~ và ~j~ có đường nối trực tiếp.

## Dữ liệu ra:
- Ghi ra duy nhất một số là chi phí Quân phải trả để đi từ thành phố ~1~ đến thành phố ~N~. Dữ liệu đảm bảo luôn có cách đi từ thành phố ~1~ đến thành phố ~N~.

## Ví dụ
#### Dữ liệu vào:
```
6 6
400 2
200 1
500 3
900 1
400 4
200 5
1 2
1 5
2 3
2 4
3 6
4 6
```

#### Dữ liệu ra:
```
800
```

#### Giải thích:
- Quân sử dụng lần lượt hệ thống xe của thành phố ~1~ rồi thành phố ~5~.