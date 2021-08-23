Trùm khủng bố Bin Laden trốn trong một căn hầm được đào sâu xuống mặt đất $M$ tầng, mỗi tầng có $N$ phòng. Các phòng được ngăn cách bằng các cửa rất khó phá. Các phòng có cửa xuống phòng ngay phía dưới và hai phòng ở hai bên. Từ trên mặt đất có $N$ cửa xuống $N$ phòng tầng $-1$. BinLaden ở tầng dưới cùng (tầng $-M$) phòng thứ $N$ (phòng ở bên phải nhất). Mỗi cửa được làm bằng một kim loại khác nhau với độ dày khác nhau nên việc phá cửa cần thời gian khác nhau.

Bạn hãy tìm cách đi từ mặt đất xuống phòng của Bin Laden nhanh nhất không hắn thoát mất.

## Dữ liệu vào:
- Dòng đầu ghi $M$ và $N\ (1 ≤ M ≤ 2222; 1 ≤ N ≤ 10)$;
- Dòng thứ hai đến $2M + 1$, dòng chẵn ghi $N$ số, dòng lẻ ghi $N - 1$ số là chi phí thời gian để phá cửa (chi phí thời gian thuộc đoạn $[0..1000]$.

## Dữ liệu ra:
- Ghi ra một số là tổng chi phí thời gian nhỏ nhất để đến được phòng của BinLaden.

## Ví dụ:
### Dữ liệu vào:
```
4 2
99 10
1
10 99
1
99 10
1
10 99
1
```

### Dữ liệu ra:
```
44
```

### Giải thích:
- Đi theo đường zigzag
```
+--99--+--10--+

|      |      |

|      1      |

|      |      |

+--10--+--99--+

|      |      |

|      1      |

|      |      |

+--99--+--10--+

|      |      |

|      1      |

|      |      |

+--10--+--99--+

|      |      |

|      1      |

|      |      |

+------+------+
```