**<center>NGUỒN: BÀI TẬP THẦY HIẾU HƯNG YÊN ÔN TẠI HƯNG YÊN NGÀY 13/11/2019</center>**
<br>

Cho một mạng gồm tập hợp các nút và tập các đường truyền hai chiều nối giữa các cặp nút. Người ta biết rằng mạng này thông suốt, tức là mọi cặp nút trong mạng đều có thể truyền tin cho nhau. Một số nút trong mạng cung cấp dịch vụ ~A~ còn một số nút khác cung cấp dịch vụ ~B~ cho tất cả các nút (kể cả nó). Có thể có một nút cung cấp cả hai dịch vụ.
Nếu một đường truyền trực tiếp bị hỏng có thể làm cho một số nút trong mạng không thể sử dụng một trong hai dịch vụ. Các đường truyền như vậy được gọi là các đường truyền quan trọng.
Bạn hãy viết chương trình xác định số đường truyền quan trọng trong mạng.

## Dữ liệu vào:
- Dòng đầu tiên ghi ~4~ số ~N, M, K~ và ~L~. Trong đó ~N\ (1≤N≤10^5)~ là số nút trong mạng, ~M\ (1≤M≤10^6)~ là số đường truyền trực tiếp trong mạng, ~K\ (1≤K≤N)~ là số nút cung cấp dịch vụ ~A~ và ~L\ (1≤L≤N)~ là số nút cung cấp dịch vụ ~B~. Các nút được đánh số từ ~1~ đến ~N~
- Dòng thứ hai ghi ~K~ số là số hiệu các nút cung cấp dịch vụ ~A~
- Dòng thứ ba ghi ~L~ số là số hiệu các nút cung cấp dịch vụ ~B~
- Mỗi dòng trong số ~M~ dòng tiếp theo ghi hai số ~p, q\ (1≤p, q≤N, p≠q)~ thể hiện một đường truyền trực tiếp nối nút ~p~ và nút ~q~

## Dữ liệu ra:
- Một số nguyên thể hiện số lượng đường truyền quan trọng trong mạng

## Ví dụ:
#### Dữ liệu vào:
```
9 10 3 4
2 4 5 
4 9 8 3 
1 2 
4 1 
2 3 
4 2 
1 5 
5 6 
6 7 
6 8 
7 9 
8 7
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
<center><img src="/images/problems/1087/net.svg" width=350></center>

**<center>Hình minh họa</center>**
- Các đường truyền quan trọng là: ~3↔2; 5↔6; 7↔9~
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)