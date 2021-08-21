**<center>NGUỒN: Contest CSL 2017-2018 Lần 2 (Tháng 1/2018) Day 2</center>**
<br>

Cho hai xâu `X` và `Y` chỉ chứa các ký tự chữ cái la tinh và chữ số (có phân biệt chữ hoa và chữ thường). Độ dài mỗi xâu không vượt quá 1500. Ở mỗi xâu ta có thể xóa một số ký tự bất kỳ, nhưng không được xóa quá ~w~ ký tự liên tiếp trong xâu. Hãy tìm cách xóa ít nhất các ký tự để làm cho hai xâu `X` và `Y` trở thành bằng nhau.

**Ví dụ**, với `X = xabcd` , `Y = aefdz` và ~w = 2~ ta có thể là cho hai xâu trở nên giống nhau bằng cách xóa như sau:
<center><img src="delchar.svg" width=200px></center>

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~w\ (1 ≤ w < 1500)~ 
- Dòng thứ hai chứa xâu `X` 
- Dòng thứ ba chứa xâu `Y`

## Dữ liệu ra:
- Ghi ra xâu `X` tìm được sau khi xóa hoặc thông báo `No 
solution` nếu không tồn tại cách xóa. 

## Ví dụ:
#### Dữ liệu vào:
```
2
xabcd
aefdz
```

#### Dữ liệu ra:
```
ad
```

## Giới hạn:
- ~50\%~ số test có độ dài các xâu không quá ~150~
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)