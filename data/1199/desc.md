**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Một đồ thị ~n~ đỉnh, đỉnh thứ i được tô màu ~c_i\ (1≤c_i≤k)~. Có ~m~ cạnh hai chiều, cạnh thứ ~i~ kết nối hai chiều trực tiếp giữa hai đỉnh ~u_i~ và ~v_i~. Đường đi là một danh sách các đỉnh ~u_1,u_2,…,u_t\ (t>1)~ thỏa mãn tồn tại đường nối trực tiếp giữa ~u_i~ và ~u_{i+1}\ (1≤i<t)~ và các đỉnh khác nhau đôi một.

**Yêu cầu:** Hãy xác định số đường đi khác nhau thỏa mãn không có hai đỉnh nào trên đường đi cùng màu. Hai đường đi ~u_1,u_2,…,u_t~ và ~v_1,v_2,…,v_t~ được coi là khác nhau nếu như tồn tại ít nhất một vị trí ~p\ (1≤p≤t)~ sao cho ~u_p≠v_p~.

## Dữ liệu vào:
- Dòng đầu tiên chứ ba số nguyên dương ~n,m,k~;
- ~m~ dòng tiếp theo, dòng thứ ~i~ chứa hai số nguyên dương ~u_i,v_i\ (1≤u_i,v_i≤n)~ xác định cạnh thứ ~i~ của đồ thị. Dữ liệu đảm bảo không có cạnh nào được lặp lại hai lần.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số lượng đường đi thỏa mãn.

## Ví dụ:
#### Dữ liệu vào:
```
4 3 3
1 2 1 3
1 2
2 3
4 2
```

#### Dữ liệu ra:
```
10
```

#### Giải thích:
<center><img src="/images/problems/1199/colorpath.png" width=350px /></center>

Ta có các đường đi sau: ~1→2;2→1;2→3;3→2;2→4;4→2;
1→2→4;4→2→1;3→2→4;4→2→3~

## Giới hạn:
- ~30\%~ số test có ~n,m≤100;k≤4~;
- ~25\%~ số test có ~n,m≤100000;k≤3~;
- ~25\%~ số test có ~n,m≤100000;k≤4~;
- ~20\%~ số test có ~n,m≤100000;k≤5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)