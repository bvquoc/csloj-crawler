Hùng làm việc cho công ty buýt TPC, cậu được giao nhiệm vụ thu thập thông tin học sinh TPC để công ty có thể thực hiện việc tối ưu hóa lịch phục vụ học sinh TPC di chuyển từ bến xe đến trường mới.

Tại bến xe buýt, mỗi ngày, chuyến xe buýt đầu tiên đi qua ở thời điểm ~T_0~, chuyến thứ hai đi qua ở thời điểm ~T_0+D~, chuyến thứ ba đi qua ở thời điểm ~T_0+2×D,…~ Có ~N~ học sinh thường xuyên chờ xe buýt tại bến, học sinh thứ ~i~ đến bến ở thời điểm ~S_i~ và sẽ lên chuyến xe buýt đầu tiên đến bến ở thời điểm không sớm hơn ~S_i~.

**Yêu cầu:** Cho ~T_0,D~ và thời điểm các học sinh đến bến, hãy xác định số hiệu chuyến xe buýt sẽ lên của tứng học sin.

## Dữ liệu vào:
- Dòng thứ nhất chứa ba số nguyên dương ~N,D,T_0\ (2≤N≤10000;1≤D≤10000;0≤T_0≤100000)~;
- Dòng thứ hai chứa ~N~ số nguyên ~S_1,S_2,…,S_N\ (0≤S_i≤10^6)~.

## Dữ liệu ra:
- Ghi ra một dòng chứa ~N~ số nguyên, số thứ ~i~ là số hiệu chuyến xe buýt mà học sinh thứ ~i~ sẽ lên.

## Ví dụ:
#### Dữ liệu vào:
```
3 5 8
0 15 23
```

#### Dữ liệu ra:
```
1 3 4
```