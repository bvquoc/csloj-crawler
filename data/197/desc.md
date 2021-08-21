Điểm của học sinh một lớp có tính chất như sau:
- Điểm số là một số nguyên từ ~0~ đến ~100~;
- Điểm số nhỏ hơn ~40~ là bị trượt.

Thang điểm làm tròn được tính như sau:
- Mốc thang điểm là một số nguyên chia hết cho ~5\ (0; 5; 10; 15; 20,…)~;
- Nếu khoảng cách điểm của học sinh với mốc thang điểm (đương nhiên là cao hơn điểm hs) ~< 3~ thì điểm của học sinh được làm tròn thành mốc thang điểm.
- Nếu điểm của hs ~< 38~ điểm thì vĩnh viễn không được làm tròn và bị trượt.

**Yêu cầu:** Cho biết điểm của ~t~ học sinh. Bạn hãy tính điểm của học sinh sau khi làm tròn?

## Dữ liệu vào:
- Dòng đâu chứa số nguyên dương ~t\ (1≤t≤60)~ là số lượng học sinh của lớp học;
- ~t~ dòng tiếp theo, dòng thứ ~i~ là số nguyên ~x\ (0≤x≤100)~ là điểm số của học sinh ~i~.

## Dữ liệu ra:
- Ghi ra trên ~t~ dòng, dòng thứ ~i~ là điểm sau khi làm tròn của học sinh ~i~.

## Ví dụ:
#### Dữ liệu vào:
```
4
73
67
38
33
```

#### Dữ liệu ra:
```
75
67
40
33
```

#### Giải thích:
- Hs ~1~: Mốc ~75 – 73 = 2 < 3~ lên được làm tròn lên 75~;
- Hs ~2~: Mốc ~70 – 67 = 3~, không nhỏ hơn ~3~ lên giữ nguyên;
- Hs ~3~: Mốc ~40 – 38 = 2 < 3~ lên được làm tròn lên ~40~ (đỗ vớt);
- Hs ~4~: Điểm ~33 < 38~ nên vĩnh viễn không được làm tròn.