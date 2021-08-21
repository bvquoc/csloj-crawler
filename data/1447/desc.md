**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T11/2020</center>**

Bản đồ giao thông của một thành phố có ~𝑛~ địa điểm đánh số từ ~1~ tới ~𝑛~ và ~𝑚~ con đường hai chiều nối giữa các địa điểm đó. Những con đường được đánh số từ ~1~ tới ~𝑚~, con đường thứ ~𝑖~ nối giữa hai địa điểm ~𝑢_𝑖, 𝑣_𝑖~ và trên con đường này trồng loại hoa ~𝑓_𝑖~. (~𝑢_𝑖, 𝑣_𝑖~ có thể trùng nhau).

Một khách du lịch muốn đi từ địa điểm ~𝑠~ tới địa điểm ~𝑡~ theo một hành trình thỏa mãn điều kiện: Hai con đường liên tiếp trên đường đi phải trồng hai loại hoa khác nhau. Hãy tìm một hành trình như vậy.

## Dữ liệu vào:
- Dòng đầu chứa bốn số nguyên dương ~𝑛, 𝑚, 𝑠, 𝑡\ (𝑛, 𝑚 ≤ 10^5; 𝑠 ≠ 𝑡)~;
- ~𝑚~ dòng tiếp theo, dòng thứ ~𝑖~ chứa ba số nguyên dương ~𝑢_𝑖, 𝑣_𝑖, 𝑓_𝑖\ (𝑓_𝑖 ≤ 10^9)~.

## Dữ liệu ra:
- Dòng đầu ghi số các con đường đi qua trên hành trình, nếu không tồn tại hành trình ghi số ~-1~;
- Nếu tồn tại hành trình, dòng thứ hai ghi số hiệu các con đường đi qua trên hành trình tìm được theo đúng thứ tự.

Các số trên một dòng được/phải ghi cách nhau bởi dấu cách.

<center><img src="/images/problems/1447/ROADS.svg" width="250px" /></center>

#### Dữ liệu vào:
```
8 12 1 8
1 2 1
1 3 3
2 3 3
3 1 3
3 5 3
3 7 3
4 6 1
6 2 3
6 8 3
7 8 1
7 6 2
4 2 2
```

#### Dữ liệu ra:
```
5
1 12 7 11 10
```

#### Dữ liệu vào:
```
3 3 1 3
1 2 1
2 2 2
2 3 1
```

#### Dữ liệu ra:
```
3
1 2 3
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)